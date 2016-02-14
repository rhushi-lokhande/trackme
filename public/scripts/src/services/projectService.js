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
var httpServices_1 = require('./httpServices');
var _settings_1 = require('./_settings');
var ProjectService = (function () {
    function ProjectService(http) {
        this.http = http;
    }
    ProjectService.prototype.post = function (data, callBack, err) {
        return this.http.post(_settings_1._Settings.url.project, data, callBack, err);
    };
    ProjectService.prototype.get = function (callBack, err) {
        return this.http.get(_settings_1._Settings.url.project, callBack, err);
    };
    ProjectService.prototype.Put = function (data, callBack, err) {
        return this.http.post(_settings_1._Settings.url.project, data, callBack, err);
    };
    ProjectService = __decorate([
        __param(0, core_1.Inject(httpServices_1.HttpService)), 
        __metadata('design:paramtypes', [httpServices_1.HttpService])
    ], ProjectService);
    return ProjectService;
})();
exports.ProjectService = ProjectService;

//# sourceMappingURL=../../map/services/projectService.js.map
