/// <reference path="./page.d.ts"/>

import Application from './Application';
import Router from './Router';

const app = new Application();
const router = new Router(app);
app.start(router);

