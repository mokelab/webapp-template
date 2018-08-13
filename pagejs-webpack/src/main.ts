import Application from './Application';
import Models from './models/Models';
import Router from './Router';
import Services from './services/Services';

const app = new Application();
const models = new Models();
const services = new Services(models);
const router = new Router(app);
app.start(router, services);

