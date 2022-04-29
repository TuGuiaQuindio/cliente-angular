import { LoginUser } from "./login-user";

export interface BasicGuideSignup extends LoginUser {
  NoDocument: string;
  firstName: string;
  lastName: string;
}
