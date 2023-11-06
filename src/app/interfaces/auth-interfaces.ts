export interface AuthResponceData {
    idToken: string,
    email: string,
    refreshToken: string,
    localId: string,
    expiresIn:string,
    registered?: boolean,
}