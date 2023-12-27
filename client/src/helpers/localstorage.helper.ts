export function getTokenFromLocalStorage(): string
{
    const data = localStorage.getItem('access_token')
    return data ? JSON.parse(data) : '';
}

export function setTokenToLocalStorage(key: string, access_token: string): void
{
    localStorage.setItem(key, JSON.stringify(access_token))
}

export function removeTokenFromLocalStorage(key: string): void
{
    localStorage.removeItem(key)
}