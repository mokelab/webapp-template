/// <reference path="./ractive.d.ts"/>
/// <reference path="./Page.ts"/>
/// <reference path="./TopPage.ts"/>
/// <reference path="./Application.ts"/>
declare var $;
declare var _;
declare var Backbone;

var app = new Application();

var AppRouter = Backbone.Router.extend({
    routes : {
        "" : "top",
    },
    top : () => {
        app.page = new TopPage(app);
        app.page.onCreate();
    }
});

$(() => {
    app.start();
    app.router = new AppRouter();
    Backbone.history.start();
});