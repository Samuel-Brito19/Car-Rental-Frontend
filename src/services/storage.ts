import { type User } from "../@types/common";

const TOKEN_KEY = '@app/token'
const USER_KEY = '@app/user'

export const saveForLogin = (token: string, user: User) => {
    localStorage.setItem(TOKEN_KEY, token)
    localStorage.setItem(USER_KEY, JSON.stringify(user))
}

export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY)
}

export const getUser = () => {
    const user = localStorage.getItem(USER_KEY)
    return user !== null ? (JSON.parse(user) as User) : null
}