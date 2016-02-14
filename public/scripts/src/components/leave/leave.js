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
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var globalDataService_1 = require('../../services/globalDataService');
var leaveService_1 = require('../../services/leaveService');
var LeaveComponent = (function () {
    function LeaveComponent(leaveService) {
        this.leaveService = leaveService;
        this.globalDataService = globalDataService_1.GlobalDataService;
        this.leaves = this.globalDataService.dev.leaves;
        this.leave = {
            id: this.globalDataService.dev._id,
            from: null,
            to: null,
            reason: ''
        };
    }
    LeaveComponent.prototype.requestForLeave = function () {
        var _this = this;
        console.log(this.leave);
        this.leaveService.post(this.leave, function (res) {
            _this.globalDataService.dev = res;
            _this.leaves = _this.globalDataService.dev.leaves;
        }, function (err) { });
    };
    LeaveComponent = __decorate([
        core_1.Component({
            selector: 'leave',
            providers: [leaveService_1.LeaveService]
        }),
        core_1.View({
            templateUrl: './scripts/src/components/leave/leave.html',
            directives: [ng2_bootstrap_1.TAB_COMPONENTS, common_1.NgFor]
        }),
        __param(0, core_1.Inject(leaveService_1.LeaveService)), 
        __metadata('design:paramtypes', [leaveService_1.LeaveService])
    ], LeaveComponent);
    return LeaveComponent;
})();
exports.LeaveComponent = LeaveComponent;

//# sourceMappingURL=../../../map/components/leave/leave.js.map
