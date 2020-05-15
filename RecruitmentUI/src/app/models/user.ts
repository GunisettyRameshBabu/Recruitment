export class User {
    id?: number;
    firstName: string;
    middleName: string;
    lastName: string;
    userid: string;
    email: string;
    roleId: Int16Array;
    password: string;
    type: string;
    countryName: any;
    countryId: any;
    loginTypes: string;
    active: boolean;
}

export enum LoginTypes
    {
        Global,
        India,
        Admin, 
        New
    }
