import { LoginUser } from "./login-user";

export interface BasicCompanySignup extends LoginUser {
  nit: string;
  companyName: string;
  address: string;
}
