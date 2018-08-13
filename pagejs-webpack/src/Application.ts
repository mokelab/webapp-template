/// <reference path="./IApplication.ts" />
/// <reference path="./services/IServices.ts" />
/// <reference path="./clients/HTTPClient.ts" />

import { getBody, isStatus200 } from './clients/Functions';

export default class Application implements IApplication {
    private templateClient: HTTPClient;
    private router?: IRouter;
    private services?: IServices;

    constructor(templateClient: HTTPClient) {
        this.templateClient = templateClient;
    }

    start(router: IRouter, services: IServices) {
        this.router = router;
        this.services = services;
        this.router.start();
    }

    fetchTemplate(name: string): Promise<string> {
        const url = `/pages/${name}`;
        return this.templateClient.send(Method.GET, url, {}, null)
            .then(isStatus200)
            .then(getBody);
    }
}
