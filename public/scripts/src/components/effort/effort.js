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
var projectService_1 = require('../../services/projectService');
var taskService_1 = require('../../services/taskService');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var globalDataService_1 = require('../../services/globalDataService');
var login_1 = require('../login/login');
var EffortComponent = (function () {
    function EffortComponent(projectService, taskService) {
        var _this = this;
        this.projectService = projectService;
        this.taskService = taskService;
        this.totalItems = 10;
        this.historyTotalItems = 10;
        this.currentPage = 1;
        this.historyCurrentPage = 1;
        this.maxSize = 5;
        this.limit = 2;
        this.tasks = [];
        this.histroyTasks = [];
        this.globalDataService = globalDataService_1.GlobalDataService;
        this.projectService.get(function (res) {
            _this.projects = res;
            _this.getTaskByProject(_this.projects[0]._id, 'Incomplete', 1);
        }, function (e) { });
        this.setTask();
    }
    EffortComponent.prototype.setTask = function () {
        this.newTask = {
            project: "",
            developer: "",
            title: "",
            description: "",
            complitionDate: null,
            time: null
        };
    };
    EffortComponent.prototype.addTask = function () {
        var _this = this;
        this.newTask.developer = this.globalDataService.dev._id;
        this.taskService.post(this.newTask, function (res) {
            console.log(res);
            _this.setTask();
        }, function (e) { });
    };
    EffortComponent.prototype.getTaskByProject = function (project, status, page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        console.log('getTaskByProject');
        this.taskService.get('project=' + project + '&developer=' + this.globalDataService.dev._id + '&status=' + status + '&page=' + page + '&limit=' + this.limit, function (res) {
            if (status == 'Incomplete') {
                _this.tasks = res.docs;
                _this.totalItems = res.total;
            }
            else {
                _this.histroyTasks = res.docs;
                _this.historyTotalItems = res.total;
            }
        }, function (e) { });
    };
    EffortComponent.prototype.completeTask = function (task, project) {
        var _this = this;
        task.status = 'Complete';
        this.taskService.updateTask(task, function (res) {
            _this.getTaskByProject(project, 'Incomplete', 1);
        }, function (e) { });
    };
    EffortComponent.prototype.changeHistoryProject = function () {
        console.log('changeHistoryProject');
        this.historyCurrentPage = 1;
    };
    EffortComponent.prototype.pageChanged = function (event, project, status) {
        console.log('pageChanged');
        this.getTaskByProject(project, status, event.page);
    };
    ;
    EffortComponent.prototype.changeNoOfPages = function (project, status) {
        this.getTaskByProject(project, status, 1);
    };
    EffortComponent = __decorate([
        core_1.Component({
            selector: 'effort',
            providers: [projectService_1.ProjectService, taskService_1.TaskService]
        }),
        core_1.View({
            templateUrl: '/scripts/src/components/effort/effort.html',
            directives: [common_1.NgFor, ng2_bootstrap_1.TAB_COMPONENTS, ng2_bootstrap_1.PAGINATION_COMPONENTS, login_1.LoginComponent]
        }),
        __param(0, core_1.Inject(projectService_1.ProjectService)),
        __param(1, core_1.Inject(taskService_1.TaskService)), 
        __metadata('design:paramtypes', [projectService_1.ProjectService, taskService_1.TaskService])
    ], EffortComponent);
    return EffortComponent;
})();
exports.EffortComponent = EffortComponent;

//# sourceMappingURL=../../../map/components/effort/effort.js.map
