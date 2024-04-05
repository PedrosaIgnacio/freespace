import axios from "axios";
import { useAuthStore } from "../../infraestructure/zustand/auth/useAuthStore";

export const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // API base URL
});

axiosClient.interceptors.request.use((config: any) => {
    const { access } = useAuthStore.getState();

    if (access) {
        config.headers = {
            ...(config.headers || {}),
            'Authorization': `Bearer ${access}`,
        }; 
    }
    return config;
});