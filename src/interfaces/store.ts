export interface Manager {
    token?: string;
    email?: string;
    lName?: string;
    fName?: string;
    area?: string;
}

export interface ManagerState {
    value: Manager
}
