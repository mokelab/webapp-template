var TopPage = (function () {
    function TopPage(app) {
        this.app = app;
    }
    TopPage.prototype.onCreate = function () {
        this.ractive = new Ractive({
            el: '#container',
            template: '#topTemplate'
        });
    };
    return TopPage;
}());
var Application = (function () {
    function Application() {
    }
    Application.prototype.start = function () {
    };
    return Application;
}());
/// <reference path="./ractive.d.ts"/>
/// <reference path="./Page.ts"/>
/// <reference path="./TopPage.ts"/>
/// <reference path="./Application.ts"/>
var Router = (function () {
    function Router(app) {
        var _this = this;
        this.app = app;
        page('/', function () {
            _this.showPage(new TopPage(app));
        });
    }
    Router.prototype.showPage = function (page) {
        this.app.page = page;
        this.app.page.onCreate();
    };
    return Router;
}());
window.addEventListener('load', function () {
    var app = new Application();
    app.start();
    app.router = new Router(app);
    page();
});
