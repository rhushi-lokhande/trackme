import {Component, View, Inject} from 'angular2/core';

import {Router, RouteConfig, RouterLink, RouterOutlet, ROUTER_PROVIDERS} from 'angular2/router';

import {HomeComponent} from '../home/home';
import {LoginComponent} from '../login/login';
import {DashboardComponent} from '../dashboard/dashboard';
import {ProjectComponent} from '../project/project';
import {NewProjectComponent} from '../project/newproject';
import {EffortComponent} from '../effort/effort';
import {ProfileComponent} from '../profile/profile';
import {DemoComponent} from '../demo/demo';
import {LeaveComponent} from '../leave/leave';
import {NavComponent} from '../nav/nav';

import {GlobalDataService} from '../../services/globalDataService';


@Component({
    selector: 'app',
})
@View({
    templateUrl: '/scripts/src/components/app/app.html',
    directives: [RouterLink, RouterOutlet, NavComponent]
})
export class AppComponent {
    devIsLogin: boolean;
    Dev: {};
    globalDataService: any
    constructor(
        @Inject(Router) private router: Router
    ) {
        this.globalDataService = GlobalDataService
        this.globalDataService.devIsLogin = false;
        router.config([
            { path: '', component: HomeComponent, as: 'Home' },
            { path: '/login', component: LoginComponent, as: 'Login' },
            { path: '/dashboard', component: DashboardComponent, as: 'Dashboard' },
            { path: '/project', component: ProjectComponent, as: 'Project' },
            { path: '/newproject', component: NewProjectComponent, as: 'NewProject' },
            { path: '/effort', component: EffortComponent, as: 'Effort' },
            { path: '/profile', component: ProfileComponent, as: 'Profile' },
            { path: '/demo', component: DemoComponent, as: 'Demo' },
            { path: '/leave', component: LeaveComponent, as: 'Leave' },
        ]);
    }
}