import Application from "./Application";
import Models from "./models/Models";
import Router from "./Router";
import Services from "./services/Services";
import XHRClient from "./clients/XHRClient";

const models = new Models();
const services = new Services(models);
const app = new Application(
    new XHRClient("text"),
    services,
    (a: IApplication) => {
        return new Router(a);
    }
);

app.start();
