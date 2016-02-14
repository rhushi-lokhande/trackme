var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
var loginService_1 = require('../../services/loginService');
var globalDataService_1 = require('../../services/globalDataService');
var LoginComponent = (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        console.log(this.testfunctoin);
        this.userName = 'a';
        this.password = 'a';
        this.showError = false;
        this.globalDataService = globalDataService_1.GlobalDataService;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        var data = {
            userName: this.userName,
            password: this.password
        };
        this.loginService.post(data, function (res) {
            _this.showError = false;
            _this.globalDataService.devIsLogin = true;
            _this.globalDataService.dev = res;
            console.log(_this.globalDataService.dev);
            _this.router.parent.navigate(['/Dashboard']);
        }, function (err) {
            _this.showError = true;
        });
    };
    __decorate([
        core_1.Input('bankname'), 
        __metadata('design:type', String)
    ], LoginComponent.prototype, "bankname", void 0);
    __decorate([
        core_1.Input('accountid'), 
        __metadata('design:type', String)
    ], LoginComponent.prototype, "id", void 0);
    __decorate([
        core_1.Input('testfunctoin'), 
        __metadata('design:type', Object)
    ], LoginComponent.prototype, "testfunctoin", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            providers: [http_1.HTTP_PROVIDERS, loginService_1.LoginService],
        }),
        core_1.View({
            templateUrl: '/scripts/src/components/login/login.html',
            directives: [common_1.FORM_DIRECTIVES]
        }),
        __param(0, core_1.Inject(loginService_1.LoginService)),
        __param(1, core_1.Inject(router_1.Router)), 
        __metadata('design:paramtypes', [loginService_1.LoginService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
})();
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=../../../map/components/login/login.js.map
