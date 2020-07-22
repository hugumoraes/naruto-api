import { Router } from 'express';

import VillageController from './app/controllers/VillageController';
import CharacterController from './app/controllers/CharacterController';

const routes = Router();

routes.get('/villages', VillageController.list);

routes.get('/character/:name', CharacterController.show);
routes.post('/character/', CharacterController.create);

export default routes;
