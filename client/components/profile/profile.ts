import {Component, View, Inject} from 'angular2/core';
import {NgIf} from 'angular2/common';

import {GlobalDataService} from '../../services/globalDataService';
import {DeveloperService} from '../../services/developerService';

@Component({
    selector: 'profile',
    providers:[DeveloperService]
})
@View({
    templateUrl: '/scripts/src/components/profile/profile.html',
    directives: [NgIf]
})
export class ProfileComponent {
    globalDataService: any;
    dev: any;
    isEdit: boolean;
    fName: string;
    lName: string;
    email: string;
    mobileNo: string;
    experience: Number;
    designation: string;
    constructor(
        @Inject(DeveloperService) private developerService:DeveloperService
    ) {
        this.globalDataService = GlobalDataService;
        this.dev = this.globalDataService.dev;
        this.isEdit = false;

    }
    eidtProfile() {
        this.isEdit = true;
        this.fName = this.dev.fName;
        this.lName = this.dev.lName;
        this.email = this.dev.email;
        this.mobileNo = this.dev.mobileNo;
        this.experience = this.dev.experience;
        this.designation = this.dev.designation;
    }
    saveProfile() {
        this.isEdit = false;
        this.dev.fName = this.fName;
        this.dev.lName = this.lName;
        this.dev.email = this.email;
        this.dev.mobileNo = this.mobileNo;
        this.dev.experience = this.experience;
        this.dev.designation = this.designation;
        this.developerService.Put(this.dev,()=>{},()=>{});
    }
    cancelEditProfile() {
        this.isEdit = false;
    }
}
