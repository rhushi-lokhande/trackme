/// <reference path="../../../../typings/tsd.d.ts"/>
import IClient = require('../client/IClient');
import IProject = require('../client/IClient');
import IDeveloper = require('../developer/IDeveloper');
interface ITask {
    title: string;
    description: string;
    complitionDate:Date;
    developer:IDeveloper;
    project:IProject;
    status: string;
    time:number;
}

export =ITask;