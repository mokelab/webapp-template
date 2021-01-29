/// <reference path="./IPage.ts" />
import Ractive from "ractive";
import { TextArea, TextField } from "../views/TextField";

import "../scss/sample.scss";
import Button, { FlatButton, RaisedButton } from "../views/Button";

export default class WidgetSamplePage implements IPage {
    private app: IApplication;
    private ractive!: Ractive;

    constructor(app: IApplication) {
        this.app = app;
    }
    async onCreate() {
        const t = await this.app.fetchTemplate("sample.html");
        this.ractive = new Ractive({
            el: "#container",
            template: t,
            components: {
                TextField: TextField,
                TextArea: TextArea,
                FlatButton: FlatButton,
                RaisedButton: RaisedButton,
            },
            on: {
                submit: () => {
                    const title = this.ractive.get("title");
                    const detail = this.ractive.get("detail");
                    alert(`title=${title} detail=${detail}`);
                },
            },
        });
    }
}
