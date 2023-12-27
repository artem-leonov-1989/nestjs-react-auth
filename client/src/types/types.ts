export interface IUser {
    id: number
    name: string
    access_token: string
}
export interface IUserData {
    username: string
    name: string
    password: string
}

export interface IResponseUserData {
    username: string|undefined
    name: string|undefined
    password: string|undefined,
    created_at: string|undefined,
    updated_at: string|undefined,
    id: number|undefined
    message: string|undefined
}

export interface IResponseUserLoginData {
    id: number
    username: string
    name: string
    access_token: string
}

export interface IUserLogin {
    username: string
    password: string
}

export interface IUserProfile {
    id: number
    name: string
    username: string
}