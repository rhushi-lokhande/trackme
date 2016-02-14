import {Http} from 'angular2/http';
import {Inject} from 'angular2/core';
import {HttpService} from './httpServices';
import {_Settings} from './_settings';
export class TaskService {
    //
    constructor( @Inject(HttpService) private http: HttpService) {
    }
    //
    post(data, callBack, err) {
        return this.http.post(_Settings.url.task, data, callBack, err);
    }
    //
    get(query, callBack, err) {
        return this.http.get(_Settings.url.task + '?' + query, callBack, err);
    }
    //
    updateTask(task, callBack: Function, err: Function) {
        return this.http.put(_Settings.url.task, task, callBack, err);
    }
}