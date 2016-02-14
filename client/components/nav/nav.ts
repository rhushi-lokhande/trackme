import {Component, View, Inject} from 'angular2/core';
import {NgIf} from 'angular2/common';
import {Router, RouterLink} from 'angular2/router';

import {GlobalDataService} from '../../services/globalDataService';

@Component({
    selector: 'nav',
})
@View({
    templateUrl: '/scripts/src/components/nav/nav.html',
    directives: [RouterLink,  NgIf]
})
export class NavComponent {
    globalDataService: any
    constructor(
        @Inject(Router) private router: Router
    ) {
        this.globalDataService = GlobalDataService;
    }
    logout() {
        this.globalDataService.devIsLogin=false;
        this.router.navigate(['/Home']);
    }
}