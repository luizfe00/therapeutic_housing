import axios from "../api/axios";
import { createUserDTO } from "../interfaces/authService.dto";

export const authUser = (payload: createUserDTO) => {
    return axios.post<{ token: string }>('/auth/signin', payload);
}