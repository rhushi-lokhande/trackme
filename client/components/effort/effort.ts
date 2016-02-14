import {Component, View, Inject} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {ProjectService} from '../../services/projectService'
import {TaskService} from '../../services/taskService'
//
import { TAB_COMPONENTS, PAGINATION_COMPONENTS  } from 'ng2-bootstrap/ng2-bootstrap';
//
import {GlobalDataService} from '../../services/globalDataService';
//
import {LoginComponent} from '../login/login';
@Component({
    selector: 'effort',
    providers: [ProjectService, TaskService]
})
@View({
    templateUrl: '/scripts/src/components/effort/effort.html',
    directives: [NgFor, TAB_COMPONENTS, PAGINATION_COMPONENTS, LoginComponent]
})
export class EffortComponent {
    projects: {};
    newTask: {
        project: string,
        developer: string,
        title: string,
        description: string;
        complitionDate: Date;
        time: number
    };
    tasks: any;
    histroyTasks: any;
    globalDataService: any;

    private totalItems: number = 10;
    private historyTotalItems: number = 10;
    private currentPage: number = 1;
    private historyCurrentPage: number = 1;
    private maxSize: number = 5;
    private limit: number = 2;

    constructor(
        @Inject(ProjectService) private projectService: ProjectService,
        @Inject(TaskService) private taskService: TaskService
    ) {
        this.tasks = [];
        this.histroyTasks = [];
        this.globalDataService = GlobalDataService;
        this.projectService.get((res) => {
            this.projects = res;
            this.getTaskByProject(this.projects[0]._id, 'Incomplete', 1);
        }, (e) => { });
        this.setTask();
    }
    setTask(): void {
        this.newTask = {
            project: "",
            developer: "",
            title: "",
            description: "",
            complitionDate: null,
            time: null
        };
    }
    addTask(): void {
        this.newTask.developer = this.globalDataService.dev._id;
        this.taskService.post(this.newTask, (res) => {
            console.log(res);
            this.setTask();
        }, (e) => { });
    }
    getTaskByProject(project, status: string, page: number = 1): void {
        console.log('getTaskByProject');
        this.taskService.get('project=' + project + '&developer=' + this.globalDataService.dev._id + '&status=' + status + '&page=' + page + '&limit=' + this.limit, (res) => {
            if (status == 'Incomplete') {
                this.tasks = res.docs;
                this.totalItems = res.total;
            } else {
                this.histroyTasks = res.docs;
                this.historyTotalItems = res.total;
            }
        }, (e) => { });
    }
    completeTask(task, project: string): void {
        task.status = 'Complete';
        this.taskService.updateTask(task, (res) => {
            this.getTaskByProject(project, 'Incomplete', 1);
        }, (e) => { });
    }
    changeHistoryProject() {
        console.log('changeHistoryProject');
        this.historyCurrentPage = 1;
    }
    private pageChanged(event: any, project: string, status: string): void {
        console.log('pageChanged');
        this.getTaskByProject(project, status, event.page);
    };
    private changeNoOfPages(project: string, status: string) {
        this.getTaskByProject(project, status, 1);
    }
}
