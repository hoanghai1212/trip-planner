import { RequestOptions } from '../interfaces/services/IAuthService';
import { AuthStoreState } from '../store/useAuthStore';
export class HttpService {
  private static instance: HttpService;
  private BASE_URL = import.meta.env.VITE_AFFILIATE_API_URL;
  private CACHED_ACCESS_TOKEN: string | null = null;

  public static getInstance(): HttpService {
    if (!HttpService.instance) {
      HttpService.instance = new HttpService();
    }

    return HttpService.instance;
  }

  public async get<Res>(endpoint: string, options?: RequestOptions): Promise<Res> {
    const response = await fetch(this.BASE_URL + endpoint, {
      headers: {
        ...(options?.credentials ? this.getAuthHeader() : undefined),
      },
    });

    return await response.json();
  }

  public async post<Req, Res>(endpoint: string, data: Req, options?: RequestOptions): Promise<Res> {
    const response = await fetch(this.BASE_URL + endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(options?.credentials ? this.getAuthHeader() : undefined),
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  }

  public async put<Req, Res>(endpoint: string, data: Req, options?: RequestOptions): Promise<Res> {
    const response = await fetch(this.BASE_URL + endpoint, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...(options?.credentials ? this.getAuthHeader() : undefined),
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  }

  public async delete<Res>(endpoint: string, options?: RequestOptions): Promise<Res> {
    const response = await fetch(this.BASE_URL + endpoint, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...(options?.credentials ? this.getAuthHeader() : undefined),
      },
    });

    return await response.json();
  }

  private getToken(): string | null {
    if (this.CACHED_ACCESS_TOKEN) {
      return this.CACHED_ACCESS_TOKEN;
    }

    const authStore = localStorage.getItem('auth-store');

    if (!authStore) {
      return null;
    }

    const parsedAuthStore: {
      state: Omit<AuthStoreState, 'setAuthState'>;
      version: number;
    } = JSON.parse(authStore);

    const { accessToken } = parsedAuthStore.state;

    if (!accessToken) {
      return null;
    }

    this.CACHED_ACCESS_TOKEN = accessToken;

    return accessToken;
  }

  private getAuthHeader() {
    const token = this.getToken();

    if (!token) {
      return undefined;
    }

    return {
      Authorization: `Bearer ${token}`,
    };
  }
}
