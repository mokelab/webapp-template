/// <reference path="./ractive.d.ts"/>
/// <reference path="./Page.ts"/>
/// <reference path="./TopPage.ts"/>
/// <reference path="./Application.ts"/>
declare var page;

class Router {
    private app : Application;

    constructor(app : Application) {
        this.app = app;
        page('/', () => {
            this.showPage(new TopPage(app));
        });
    }
    private showPage(page : Page) {
        this.app.page = page;
        this.app.page.onCreate();
    }
}

window.addEventListener('load', () => {
    var app = new Application();
    app.start();
    app.router = new Router(app);
    page();
});