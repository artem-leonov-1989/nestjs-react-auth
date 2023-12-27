import {useAppSelector} from "../store/hooks.ts";

export const useAuth = (): boolean => {
    return useAppSelector((state) => state.user.isAuth)
}

export const userName = () => {
    return useAppSelector((state) => state.user.user?.name)
}