/// <reference path="./IRouter.ts" />

interface IApplication {
    start(router: IRouter): void;
}