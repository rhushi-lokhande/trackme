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
var projectService_1 = require('../../services/projectService');
var router_1 = require('angular2/router');
var ProjectComponent = (function () {
    function ProjectComponent(ProjectService, router) {
        var _this = this;
        this.ProjectService = ProjectService;
        this.router = router;
        this.ProjectService.get(function (res) {
            _this.projects = res;
        }, function (err) { });
    }
    ProjectComponent.prototype.test = function () {
        this.router.parent.navigate(['/Dashboard']);
    };
    ProjectComponent = __decorate([
        core_1.Component({
            selector: 'project',
            providers: [projectService_1.ProjectService]
        }),
        core_1.View({
            templateUrl: '/scripts/src/components/project/project.html',
        }),
        __param(0, core_1.Inject(projectService_1.ProjectService)),
        __param(1, core_1.Inject(router_1.Router)), 
        __metadata('design:paramtypes', [projectService_1.ProjectService, router_1.Router])
    ], ProjectComponent);
    return ProjectComponent;
})();
exports.ProjectComponent = ProjectComponent;

//# sourceMappingURL=../../../map/components/project/project.js.map
