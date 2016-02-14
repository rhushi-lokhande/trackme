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
var globalDataService_1 = require('../../services/globalDataService');
var developerService_1 = require('../../services/developerService');
var ProfileComponent = (function () {
    function ProfileComponent(developerService) {
        this.developerService = developerService;
        this.globalDataService = globalDataService_1.GlobalDataService;
        this.dev = this.globalDataService.dev;
        this.isEdit = false;
    }
    ProfileComponent.prototype.eidtProfile = function () {
        this.isEdit = true;
        this.fName = this.dev.fName;
        this.lName = this.dev.lName;
        this.email = this.dev.email;
        this.mobileNo = this.dev.mobileNo;
        this.experience = this.dev.experience;
        this.designation = this.dev.designation;
    };
    ProfileComponent.prototype.saveProfile = function () {
        this.isEdit = false;
        this.dev.fName = this.fName;
        this.dev.lName = this.lName;
        this.dev.email = this.email;
        this.dev.mobileNo = this.mobileNo;
        this.dev.experience = this.experience;
        this.dev.designation = this.designation;
        this.developerService.Put(this.dev, function () { }, function () { });
    };
    ProfileComponent.prototype.cancelEditProfile = function () {
        this.isEdit = false;
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'profile',
            providers: [developerService_1.DeveloperService]
        }),
        core_1.View({
            templateUrl: '/scripts/src/components/profile/profile.html',
            directives: [common_1.NgIf]
        }),
        __param(0, core_1.Inject(developerService_1.DeveloperService)), 
        __metadata('design:paramtypes', [developerService_1.DeveloperService])
    ], ProfileComponent);
    return ProfileComponent;
})();
exports.ProfileComponent = ProfileComponent;

//# sourceMappingURL=../../../map/components/profile/profile.js.map
