import { Router } from 'express';

import VillageController from './app/controllers/VillageController';
import CharacterController from './app/controllers/CharacterController';
import JutsuController from './app/controllers/JutsuController';

const routes = Router();

routes.get('/villages', VillageController.list);

routes.post('/jutsus/1', JutsuController.associateJutsuToCharacter);
routes.post('/jutsus', JutsuController.create);

routes.get('/characters/:name', CharacterController.show);
routes.post('/characters/', CharacterController.create);

export default routes;
