import { User } from "../../../domain/models/User";

export interface AuthStateStore {
    access: string | null;
    user: User | null;
    authenticate: (access: string, user: User) => void;
    logout: () => void;
}

