export interface RequestOptions {
  credentials?: boolean;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface AccessTokenDto {
  accessToken: string;
}

export interface UserProfileDto {
  name: string;
  email: string;
  role: string;
}
