import {Component, View, Inject} from 'angular2/core';
import {NgFor} from 'angular2/common';
//
import { TAB_COMPONENTS } from 'ng2-bootstrap/ng2-bootstrap';
//
import {GlobalDataService} from '../../services/globalDataService';
import {LeaveService} from '../../services/leaveService';
//

@Component({
    selector: 'leave',
    providers: [LeaveService]
})
@View({
    templateUrl: './scripts/src/components/leave/leave.html',
    directives: [TAB_COMPONENTS, NgFor]
})
export class LeaveComponent {
    globalDataService: any;
    leaves: Array<Object>;
    leave: {
        id
        from: Date;
        to: Date;
        reason: string;
    }
    constructor( @Inject(LeaveService) private leaveService: LeaveService) {
        this.globalDataService = GlobalDataService
        this.leaves = this.globalDataService.dev.leaves;
        this.leave = {
            id: this.globalDataService.dev._id,
            from: null,
            to: null,
            reason: ''
        }
    }
    requestForLeave() {
        console.log(this.leave);
        this.leaveService.post(this.leave, (res) => {
            this.globalDataService.dev = res;
            this.leaves = this.globalDataService.dev.leaves;
        }, (err) => { })
    }
}
