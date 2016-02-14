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
var DeveloperService_1 = require('../../services/DeveloperService');
var projectService_1 = require('../../services/projectService');
var NewProjectComponent = (function () {
    function NewProjectComponent(developerService, projectService) {
        var _this = this;
        this.developerService = developerService;
        this.projectService = projectService;
        this.setProject();
        developerService.get(function (res) {
            _this.developerList = res;
        }, function (err) { });
    }
    NewProjectComponent.prototype.setProject = function () {
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
        this.dev = "";
    };
    NewProjectComponent.prototype.addProject = function () {
        var _this = this;
        this.newProject.developer.push(this.dev);
        this.projectService.post(this.newProject, function (res) {
            _this.setProject();
        }, function (err) {
            console.log(err);
        });
    };
    NewProjectComponent = __decorate([
        core_1.Component({
            selector: 'project',
            providers: [DeveloperService_1.DeveloperService, projectService_1.ProjectService]
        }),
        core_1.View({
            templateUrl: '/scripts/src/components/project/newproject.html',
            directives: [common_1.NgFor]
        }),
        __param(0, core_1.Inject(DeveloperService_1.DeveloperService)),
        __param(1, core_1.Inject(projectService_1.ProjectService)), 
        __metadata('design:paramtypes', [DeveloperService_1.DeveloperService, projectService_1.ProjectService])
    ], NewProjectComponent);
    return NewProjectComponent;
})();
exports.NewProjectComponent = NewProjectComponent;

//# sourceMappingURL=../../../map/components/project/newProject.js.map
