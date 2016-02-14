import {Component, View, Inject} from 'angular2/core';
import {FORM_DIRECTIVES, NgFor } from 'angular2/common';

import {DeveloperService} from '../../services/DeveloperService';
import {ProjectService} from '../../services/projectService';
@Component({
    selector: 'project',
    providers: [DeveloperService, ProjectService]
})
@View({
    templateUrl: '/scripts/src/components/project/newproject.html',
    directives: [NgFor]
})
export class NewProjectComponent {
    newProject: {
        name: string;
        description: string;
        technology: Array<string>;
        status: string;
        client: string;
        manager: string;
        developer: Array<string>;
        startDate: Date;
        endDate: Date;
    }
    dev: string;
    developerList: Array<string>;
    constructor( @Inject(DeveloperService) private developerService: DeveloperService,
        @Inject(ProjectService) private projectService: ProjectService) {
        this.setProject();
        developerService.get((res) => {
            this.developerList = res;
        }, (err) => { });
    }
    setProject() {
        this.newProject = {
            name: "",
            description: "",
            technology: [],
            status: "",
            client: "",
            manager: "",
            developer: [],
            startDate: null,
            endDate: null,
        };
        this.dev="";
    }
    addProject() {
        this.newProject.developer.push(this.dev);
        this.projectService.post(this.newProject, (res) => {
            this.setProject();
        }, (err) => {
            console.log(err);
        });
    }
}

