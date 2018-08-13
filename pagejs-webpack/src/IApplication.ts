/// <reference path="./IRouter.ts" />
/// <reference path="./services/IServices.ts" />

interface IApplication {
    start(router: IRouter, services: IServices): void;
}