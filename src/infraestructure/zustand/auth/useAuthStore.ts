import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { AuthStateStore } from './types';
import { AUTH_STORAGE } from '../../utils/zustand';

export const useAuthStore = create<AuthStateStore>()(
    persist(
        (set) => ({
            access: null,
            user: null,
            authenticate: (access, user) => set({ access, user }),
            logout: () => set({ access: null, user: null }),
        }),
        {
            name: AUTH_STORAGE,
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);
