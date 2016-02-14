import {Injectable} from 'angular2/core';
@Injectable()
export class GlobalDataService {
    devIsLogin: boolean;
    dev: {};
    constructor() {
        this.setData();
    }
    setData() {
        this.devIsLogin = false;
        this.dev = {};
    }
     setData1(gd) {
        return gd=new GlobalDataService();
    }
}