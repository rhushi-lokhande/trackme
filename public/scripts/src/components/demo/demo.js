var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var DemoComponent = (function () {
    function DemoComponent() {
        this.totalItems = 64;
        this.currentPage = 4;
        this.maxSize = 5;
    }
    DemoComponent.prototype.setPage = function (pageNo) {
        this.currentPage = pageNo;
    };
    ;
    DemoComponent.prototype.pageChanged = function (event) {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    };
    ;
    DemoComponent.prototype.setnoofpage = function (noofpage) {
        console.log(noofpage);
        this.totalItems = noofpage;
    };
    DemoComponent = __decorate([
        core_1.View({
            templateUrl: '/scripts/src/components/demo/demo.html',
            directives: [ng2_bootstrap_1.PAGINATION_COMPONENTS, common_1.CORE_DIRECTIVES]
        }),
        core_1.Component({
            selector: 'tabs-demo',
        }), 
        __metadata('design:paramtypes', [])
    ], DemoComponent);
    return DemoComponent;
})();
exports.DemoComponent = DemoComponent;

//# sourceMappingURL=../../../map/components/demo/demo.js.map
