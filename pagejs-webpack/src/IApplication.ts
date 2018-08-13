/// <reference path="./IRouter.ts" />
/// <reference path="./services/IServices.ts" />

interface IApplication {
    start(router: IRouter, services: IServices): void;

    fetchTemplate(name: string): Promise<string>;
}