export interface IUser {
    _id?: number | string,
    name?: string,
    email: string,
    password: string,
    confilmpassword?: string,
    role: string,
}