import {Http} from 'angular2/http';
import {Component, View, Inject} from 'angular2/core';
import {HttpService} from './httpServices';
import {_Settings} from './_settings';
export class LoginService {

    constructor( @Inject(HttpService) private http: HttpService) {
    }

    post(data, callBack, err) {
        return this.http.post(_Settings.url.login, data, callBack, err);
    }
}

