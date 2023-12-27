import {IResponseUserData, IResponseUserLoginData, IUserData, IUserLogin, IUserProfile} from "../types/types.ts";
import { instance } from "../api/axios.api.ts";

export const AuthService = {
    async registration(userData: IUserData): Promise<IResponseUserData | undefined> {
        const {data} = await instance.post<IUserData, { data: IResponseUserData}>('user', userData)
        return data
    },
    async login(userData: IUserLogin): Promise<IResponseUserLoginData | undefined> {
        const {data} = await instance.post<IUserLogin, { data: IResponseUserLoginData}>('auth/login', userData)
        return data
    },
    async getProfile(): Promise<IUserProfile | undefined> {
        const {data} = await instance.get('auth/profile')
        if (data) {
            return data;
        }
    },
}