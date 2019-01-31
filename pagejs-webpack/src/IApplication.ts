/// <reference path="./IRouter.ts" />
/// <reference path="./services/IServices.ts" />

interface IApplication {
    services: IServices;

    start(router: IRouter): void;

    fetchTemplate(name: string): Promise<string>;
}
