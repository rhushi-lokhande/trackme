var browser_1 = require('angular2/platform/browser');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var core_1 = require('angular2/core');
var app_1 = require('./components/app/app');
var httpServices_1 = require('./services/httpServices');
var GlobalDataService_1 = require('./services/GlobalDataService');
core_1.enableProdMode();
browser_1.bootstrap(app_1.AppComponent, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, httpServices_1.HttpService, GlobalDataService_1.GlobalDataService]);

//# sourceMappingURL=../map/bootstrap.js.map
