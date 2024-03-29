import {Router} from 'express';
import HelloController from './controllers/HelloController.js';

const routes = new Router();

routes.get('/hello', HelloController.index);

export default routes;