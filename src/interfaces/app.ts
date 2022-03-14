export interface Manager {
    isLogged: boolean;
    token?: string;
    email?: string;
    lName?: string;
    fName?: string;
    area?: string;
    password?: string;
}
export interface Admin {
    isLogged: boolean;
    token?: string;
}
