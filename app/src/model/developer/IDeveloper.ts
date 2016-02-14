/// <reference path="../../../../typings/tsd.d.ts"/>
import IProject = require('../project/IProject');
interface IDeveloper {
    fName: string;
    lName: string;
    email: Array<string>;
    mobileNo: Array<number>;
    dob: Date;
    experience: number;
    designation: string;
    technology: Array<string>;
    project: Array<IProject>;
    userName: string;
    password: string;
    status: string;
    isActive: boolean;
    leaves: Array<Ileaves>;
}

interface Ileaves {
    from: Date;
    to: Date,
    reason: String,
    noOfDays: Number;
}
export =IDeveloper;