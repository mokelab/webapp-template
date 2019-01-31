import Application from "./Application";
import Models from "./models/Models";
import Router from "./Router";
import Services from "./services/Services";
import XHRClient from "./clients/XHRClient";
import AccessToken from "./models/token/AccessToken";

const token = new AccessToken();
const models = new Models(token);
const services = new Services(models);
const app = new Application(
    new XHRClient("text"),
    services,
    (a: IApplication) => {
        return new Router(a);
    }
);

app.start();
