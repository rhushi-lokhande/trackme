import {Http} from 'angular2/http';
import {Component, View, Inject} from 'angular2/core';

export class HttpService {

    constructor( @Inject(Http) private http: Http) {
    }

    post(url, data, successCallBack, errCallback) {
        return this.http.post(url, JSON.stringify(data)).subscribe(
            (res) => {
                successCallBack(res.json());
            },
            (err) => {
                errCallback(err);
            }
        );
    }
    get(url, successCallBack, errCallback) {
        return this.http.get(url).subscribe(
            (res) => {
                successCallBack(res.json());
            },
            (err) => {
                errCallback(err);
            }
        );
    }
    put(url, data, successCallBack, errCallback) {
        return this.http.put(url, JSON.stringify(data)).subscribe(
            (res) => {
                successCallBack(res.json());
            },
            (err) => {
                errCallback(err);
            }
        );
    }
}

