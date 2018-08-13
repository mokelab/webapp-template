/// <reference path="./IPage.ts" />

export default class TopPage implements IPage {
    private app: IApplication;
    
    constructor(app: IApplication) {
        this.app = app;
    }
    onCreate(): void {
        console.log('top page');
    }
}
