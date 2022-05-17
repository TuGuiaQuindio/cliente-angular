import { TokenResponse } from "./token-response";

export interface UserLoginResponse extends TokenResponse {
  name: string;
  role: number;
}
