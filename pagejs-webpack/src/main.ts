import Application from './Application';
import Models from './models/Models';
import Router from './Router';
import Services from './services/Services';
import XHRClient from './clients/XHRClient';

const app = new Application(new XHRClient('text'));
const models = new Models();
const services = new Services(models);
const router = new Router(app);

app.start(router, services);

