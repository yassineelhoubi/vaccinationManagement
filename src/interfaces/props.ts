export interface headerProps {
    setTakeShot: (val: boolean) => void;
    takeShot: boolean;
}
export interface NextPrevBtnProps {
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

export interface LayoutProps {
    setTakeShot: (val: boolean) => void
}