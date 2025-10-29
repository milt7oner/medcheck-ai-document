export interface LoginUserInputDTO {
  email: string;
  password: string;
}

export interface LoginUserOutputDTO {
  accessToken: string;
  refreshToken?: string;
}
