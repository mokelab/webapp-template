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
})();
var Application = (function () {
    function Application() {
    }
    Application.prototype.start = function () {
    };
    return Application;
})();
/// <reference path="./ractive.d.ts"/>
/// <reference path="./Page.ts"/>
/// <reference path="./TopPage.ts"/>
/// <reference path="./Application.ts"/>
var app = new Application();
var AppRouter = Backbone.Router.extend({
    routes: {
        "": "top"
    },
    top: function () {
        app.page = new TopPage(app);
        app.page.onCreate();
    }
});
$(function () {
    app.start();
    app.router = new AppRouter();
    Backbone.history.start();
});
