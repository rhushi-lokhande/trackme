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
var router_1 = require('angular2/router');
var home_1 = require('../home/home');
var login_1 = require('../login/login');
var dashboard_1 = require('../dashboard/dashboard');
var project_1 = require('../project/project');
var newproject_1 = require('../project/newproject');
var effort_1 = require('../effort/effort');
var profile_1 = require('../profile/profile');
var demo_1 = require('../demo/demo');
var leave_1 = require('../leave/leave');
var nav_1 = require('../nav/nav');
var globalDataService_1 = require('../../services/globalDataService');
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.globalDataService = globalDataService_1.GlobalDataService;
        this.globalDataService.devIsLogin = false;
        router.config([
            { path: '', component: home_1.HomeComponent, as: 'Home' },
            { path: '/login', component: login_1.LoginComponent, as: 'Login' },
            { path: '/dashboard', component: dashboard_1.DashboardComponent, as: 'Dashboard' },
            { path: '/project', component: project_1.ProjectComponent, as: 'Project' },
            { path: '/newproject', component: newproject_1.NewProjectComponent, as: 'NewProject' },
            { path: '/effort', component: effort_1.EffortComponent, as: 'Effort' },
            { path: '/profile', component: profile_1.ProfileComponent, as: 'Profile' },
            { path: '/demo', component: demo_1.DemoComponent, as: 'Demo' },
            { path: '/leave', component: leave_1.LeaveComponent, as: 'Leave' },
        ]);
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
        }),
        core_1.View({
            templateUrl: '/scripts/src/components/app/app.html',
            directives: [router_1.RouterLink, router_1.RouterOutlet, nav_1.NavComponent]
        }),
        __param(0, core_1.Inject(router_1.Router)), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;

//# sourceMappingURL=../../../map/components/app/app.js.map
