import { Router } from 'express';
import * as TodoController from './controller';

const routes = new Router();

routes.post('/message', TodoController.createMessage);
routes.get('/message/all', TodoController.findAllMessages);
routes.delete('/message/:id', TodoController.deleteMessage);


export default routes;