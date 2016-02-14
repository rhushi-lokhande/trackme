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
var router_1 = require('angular2/router');
var globalDataService_1 = require('../../services/globalDataService');
var NavComponent = (function () {
    function NavComponent(router) {
        this.router = router;
        this.globalDataService = globalDataService_1.GlobalDataService;
    }
    NavComponent.prototype.logout = function () {
        this.globalDataService.devIsLogin = false;
        this.router.navigate(['/Home']);
    };
    NavComponent = __decorate([
        core_1.Component({
            selector: 'nav',
        }),
        core_1.View({
            templateUrl: '/scripts/src/components/nav/nav.html',
            directives: [router_1.RouterLink, common_1.NgIf]
        }),
        __param(0, core_1.Inject(router_1.Router)), 
        __metadata('design:paramtypes', [router_1.Router])
    ], NavComponent);
    return NavComponent;
})();
exports.NavComponent = NavComponent;

//# sourceMappingURL=../../../map/components/nav/nav.js.map
