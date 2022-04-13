import { HttpService } from './HttpService';
import EndpointConst from '../constants/EndpointConst';
import { AccessTokenDto, LoginDto, UserProfileDto } from '../interfaces/services/IAuthService';

export class AuthService {
  private static instance: AuthService;
  private httpService: HttpService;

  constructor() {
    this.httpService = HttpService.getInstance();
  }

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }

    return AuthService.instance;
  }

  public async login(loginDto: LoginDto): Promise<AccessTokenDto> {
    const accessTokenDto = await this.httpService.post<LoginDto, AccessTokenDto>(
      `${EndpointConst.auth.login}`,
      loginDto
    );

    return accessTokenDto;
  }

  public async getProfile(): Promise<UserProfileDto> {
    const userProfileDto = await this.httpService.get<UserProfileDto>(`${EndpointConst.auth.getProfile}`, {
      credentials: true,
    });

    return userProfileDto;
  }
}
