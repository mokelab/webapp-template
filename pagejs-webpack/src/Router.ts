/// <reference path="./IRouter.ts" />
/// <reference path="./page.d.ts" />
/// <reference path="./IApplication.ts" />
/// <reference path="./pages/IPage.ts" />

import TopPage from "./pages/TopPage";
import LoginPage from "./pages/LoginPage";

export default class Router implements IRouter {
    constructor(app: IApplication) {
        page("/", () => {
            //this.showPage(new TopPage(app));
            this.showPage(new LoginPage(app));
        });
    }

    start(): void {
        page();
    }

    navigate(path: string): void {
        page(path);
    }

    redirect(path: string): void {
        page.redirect(path);
    }

    private showPage(next: IPage) {
        next.onCreate();
    }
}
