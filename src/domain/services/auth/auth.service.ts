import { AxiosResponse } from 'axios';
import { axiosClient } from '../../api/axios';
import { AuthenticateUserResponse } from './types';

export default class AuthService {
    async authenticateUser(email: string, password: string): Promise<AuthenticateUserResponse> {
        const response: AxiosResponse<AuthenticateUserResponse> = await axiosClient.post('/auth/access/', { email: email.toLowerCase(), password });
        return response.data;
    }
}
