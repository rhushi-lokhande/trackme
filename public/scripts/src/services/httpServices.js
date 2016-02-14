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
var http_1 = require('angular2/http');
var core_1 = require('angular2/core');
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.post = function (url, data, successCallBack, errCallback) {
        return this.http.post(url, JSON.stringify(data)).subscribe(function (res) {
            successCallBack(res.json());
        }, function (err) {
            errCallback(err);
        });
    };
    HttpService.prototype.get = function (url, successCallBack, errCallback) {
        return this.http.get(url).subscribe(function (res) {
            successCallBack(res.json());
        }, function (err) {
            errCallback(err);
        });
    };
    HttpService.prototype.put = function (url, data, successCallBack, errCallback) {
        return this.http.put(url, JSON.stringify(data)).subscribe(function (res) {
            successCallBack(res.json());
        }, function (err) {
            errCallback(err);
        });
    };
    HttpService = __decorate([
        __param(0, core_1.Inject(http_1.Http)), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpService);
    return HttpService;
})();
exports.HttpService = HttpService;

//# sourceMappingURL=../../map/services/httpServices.js.map
