/// <reference path="./IApplication.ts" />
/// <reference path="./services/IServices.ts" />
/// <reference path="./clients/HTTPClient.ts" />

import { getBody, isStatus200 } from "./clients/Functions";

export default class Application implements IApplication {
    private templateClient: HTTPClient;
    private router: IRouter;
    services: IServices;

    constructor(
        templateClient: HTTPClient,
        services: IServices,
        routerFactory: (app: IApplication) => IRouter
    ) {
        this.templateClient = templateClient;
        this.services = services;
        this.router = routerFactory(this);
    }

    start() {
        this.router.start();
    }

    fetchTemplate(name: string): Promise<string> {
        const url = `/pages/${name}`;
        return this.templateClient
            .send(Method.GET, url, {}, null)
            .then(isStatus200)
            .then(getBody);
    }

    navigate(path: string): void {
        this.router.navigate(path);
    }

    redirect(path: string): void {
        this.router.redirect(path);
    }
}
