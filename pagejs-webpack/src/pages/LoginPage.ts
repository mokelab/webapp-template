/// <reference path="./IPage.ts" />
import { Ractive } from "../ractive";
import { mdcText } from "../decorators/mdc";

export default class LoginPage implements IPage {
    private app: IApplication;
    private ractive!: Ractive;

    constructor(app: IApplication) {
        this.app = app;
    }
    async onCreate() {
        const t = await this.app.fetchTemplate("login.html");
        this.ractive = new Ractive({
            el: "#container",
            template: t,
            decorators: {
                "mdc-text": mdcText
            }
        });
    }
}
