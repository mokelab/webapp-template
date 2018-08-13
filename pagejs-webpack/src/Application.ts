/// <reference path="./IApplication.ts" />

export default class Application implements IApplication {
    private router?: IRouter;

    start(router: IRouter) {
        this.router = router;
        this.router.start();
    }
}
