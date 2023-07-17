import axios from "../api/axios";
import { useAuthContext } from "../context/AuthContext"

interface RefreshTokenResponse {
    refresh_token: string
}

export const useRefreshToken = () => {
    const { setAuth } = useAuthContext();

    const refresh = async () => {
        const response = await axios.get<RefreshTokenResponse>('/refresh', {
            withCredentials: true
        })
        localStorage.setItem('H_token', response.data.refresh_token);
        setAuth(response.data.refresh_token)
        return response.data.refresh_token
    }

    return refresh
}