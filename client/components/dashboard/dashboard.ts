import {Component, View} from 'angular2/core';
import {RouterLink} from 'angular2/router';
//
import {GlobalDataService} from '../../services/globalDataService';
//
@Component({
  selector: 'dashboard'
})
@View({
  templateUrl: '/scripts/src/components/dashboard/dashboard.html',
   directives: [RouterLink]
})
export class DashboardComponent {
     gd: any;
     constructor(){
          this.gd = GlobalDataService
     }
}
