import { User } from "../../models/User";

export interface AuthenticateUserResponse {
    access: string;
    user: User;
}