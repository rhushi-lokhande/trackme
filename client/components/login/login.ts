///<reference path="../../../node_modules/angular2/typings/node/node.d.ts" />

import {Component, View, Inject, Input, OnInit} from 'angular2/core';
import {FormBuilder, FORM_DIRECTIVES } from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Router} from 'angular2/router';

import {LoginService} from '../../services/loginService';
import {GlobalDataService} from '../../services/globalDataService';
@Component({
    selector: 'login',
    providers: [HTTP_PROVIDERS, LoginService],
})
@View({
    templateUrl: '/scripts/src/components/login/login.html',
    directives: [FORM_DIRECTIVES]
})

export class LoginComponent {
    userName: string;
    password: string;
    showError: boolean;
    globalDataService: any;
    @Input('bankname') bankname: string;
    @Input('accountid') id: string;
    @Input('testfunctoin') testfunctoin: any;

    constructor(
        @Inject(LoginService) private loginService: LoginService,
        @Inject(Router) private router: Router
    ) {
        console.log(this.testfunctoin);
        this.userName = 'a';
        this.password = 'a';
        this.showError = false;
        this.globalDataService = GlobalDataService;
    }
    login() {
        var data = {
            userName: this.userName,
            password: this.password
        }
        this.loginService.post(data, (res) => {
            this.showError = false;
            this.globalDataService.devIsLogin = true;
            this.globalDataService.dev = res;
            console.log(this.globalDataService.dev);
            // and then we redirect the user to the home
            this.router.parent.navigate(['/Dashboard']);
        }, (err) => {
            this.showError = true;
        });
    }
}





