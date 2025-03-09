export interface IAuthContext {
    auth: IAuthUser | null;
    isLoading: boolean;
    login: (userData: IAuthUser) => Promise<boolean>;
    logout: ()=> Promise<boolean>;
    isAuthorize: boolean;

}

export interface IAuthUser{
    password:string,
    email: string
}