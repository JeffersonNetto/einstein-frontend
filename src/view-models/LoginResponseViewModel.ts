import User from "../models/User";

export default interface LoginResponseViewModel {
  AccessToken: string;
  ExpiresIn: number;
  User: User;
}
