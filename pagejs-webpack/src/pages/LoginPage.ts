/// <reference path="./IPage.ts" />
import { Ractive } from "../ractive";
import { mdcText, mdcRipple } from "../decorators/mdc";

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
                "mdc-text": mdcText,
                "mdc-ripple": mdcRipple,
            },
            data: {
                inProgress: false,
                canLogin: (email: string, password: string) => {
                    return email.length > 0 && password.length > 0;
                },
            },
            on: {
                login: () => {
                    this.login();
                },
            },
        });
    }

    private async login() {
        const email = this.ractive.get("email");
        const password = this.ractive.get("password");

        this.ractive.set("inProgress", true);

        try {
            const result = await this.app.services.account.login(
                email,
                password
            );
            this.ractive.set("inProgress", false);
        } catch (e) {
            this.ractive.set("inProgress", false);
        }
    }
}
