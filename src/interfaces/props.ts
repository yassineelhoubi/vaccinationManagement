export interface CustomBtnProps {
    name: string
}
export interface AgeProps {
    setAge: (val: number) => void;
}
export interface ShotProps {
    setShot: (val: number) => void;
    shot: number
}
export interface DiseaseOrTreatmentsProps {
    setDiseaseOrTreatments: (val: boolean) => void;
    diseaseOrTreatments: boolean;
}
export interface SideEffectsProps {
    setSideEffects: (val: boolean) => void;
    sideEffects: boolean;
}
export interface CinProps {
    setCin: (val: string | null) => void;
    cin: string | null;
}
export interface UserInfoProps {
    setUserInfo: (val: UserInfo) => void;
    userInfo: UserInfo;
}

export interface UserInfo {
    address: string;
    email: string;
    fName: string;
    lName: string;
    city: string;
    center : string;
    area : string;
    nbrPhone: number;
}

export interface UserData {
    age: number;
    shotTaken: number
    address: string;
    email: string;
    fName: string;
    lName: string;
    city: string;
    nbrPhone: number;
    cin: string | null;
    diseaseOrTreatments?: string | boolean;
    sideEffects1stVaccine?: string | boolean;
    sideEffects2stVaccine?: string | boolean;
}
export interface SnackBarProps {
    text: string,
    color: string,
    state: boolean,
    setState: Function
}

export interface ColumnTable {
    id: 'name' | 'city' | 'area' | 'actions';
    label: string;

}
export interface DataTable {
    _id: string;
    name?: string;
    city?: string;
    area?: string;
    actions?: string;
}
export interface PropsTable {
    data: DataTable[];
    columns: ColumnTable[];
}
export interface Areas {
    id : string,
    region : string
}
export interface Cities {
    id : string,
    ville : string,
    region : string
}
export interface Centers {
    status : boolean,
    message : centerT[],
}
type centerT = {
    _id: string
    name: string
    city: string
    area: string
    createdBy: string
    createdAt: string
    updatedAt: string
}