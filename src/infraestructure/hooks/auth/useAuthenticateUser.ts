import { useMutation } from '@tanstack/react-query';

import AuthService from '../../../domain/services/auth/auth.service';

function useAuthenticateUser() {
    const authService = new AuthService();
    return useMutation({
        mutationKey: ['sign-in'],
        mutationFn: ({ email, password }: { email: string; password: string }) => authService.authenticateUser(email, password),
    });
}

export default useAuthenticateUser;
