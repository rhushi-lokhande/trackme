import {Http} from 'angular2/http';
import {Inject} from 'angular2/core';
import {HttpService} from './httpServices';
import {_Settings} from './_settings';
export class DeveloperService {
    constructor( @Inject(HttpService) private http: HttpService) {
    }

    post(data, callBack, err) {
        return this.http.post('', data, callBack, err);
    }
    get(callBack, err) {
        return this.http.get(_Settings.url.developer, callBack, err);
    }
    Put(data, callBack, err) {
        return this.http.put(_Settings.url.developer, data, callBack, err);
    }
}
