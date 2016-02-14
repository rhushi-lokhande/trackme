import {Component, View, Inject} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {ProjectService} from '../../services/projectService';
import {Router} from 'angular2/router';
@Component({
    selector: 'project',
    providers: [ProjectService]
})
@View({
    templateUrl: '/scripts/src/components/project/project.html',
})
export class ProjectComponent {
    projects: {}
    constructor(
        @Inject(ProjectService) private ProjectService: ProjectService,
        @Inject(Router) private router: Router
    ) {
        this.ProjectService.get((res) => {
            this.projects = res;
        }, (err) => { })
    }
    test() {
        this.router.parent.navigate(['/Dashboard']);
    }
}
