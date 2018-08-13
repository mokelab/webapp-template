/// <reference path="./IApplication.ts" />
/// <reference path="./services/IServices.ts" />


export default class Application implements IApplication {
    private router?: IRouter;
    private services?: IServices;

    start(router: IRouter, services: IServices) {
        this.router = router;
        this.services = services;
        this.router.start();
    }
}
