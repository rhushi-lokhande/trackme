/// <reference path="../../../../typings/tsd.d.ts"/>
import IClient = require('../client/IClient');
import IDeveloper = require('../developer/IDeveloper');
interface IProject {
    name: string;
    description: string;
    technology: Array<string>;
    developer:Array<IDeveloper>;
    manager:IDeveloper;
    startDate: Date;
    endDate: Date;
    status: string;
    isActive:boolean;
    client:IClient
}

export =IProject;