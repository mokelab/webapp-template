/// <reference path="./IRouter.ts" />
/// <reference path="./page.d.ts" />
/// <reference path="./IApplication.ts" />
/// <reference path="./pages/IPage.ts" />

import TopPage from './pages/TopPage';

export default class Router implements IRouter {
    constructor(app: IApplication) {
        page('/', () => {
            this.showPage(new TopPage(app));
        });
    }

    start(): void {
        page();
    }

    navigate(path: string): void {
        throw new Error("Method not implemented.");
    }   

    redirect(path: string): void {
        throw new Error("Method not implemented.");
    }

    private showPage(next: IPage) {
        next.onCreate();
    }
}
