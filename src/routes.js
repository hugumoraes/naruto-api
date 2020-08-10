import { Router } from 'express';

import VillageController from './app/controllers/VillageController';
import CharacterController from './app/controllers/CharacterController';
import JutsuController from './app/controllers/JutsuController';

const routes = Router();

routes.get('/villages', VillageController.list);

routes.get('/jutsus', JutsuController.list);
routes.post('/jutsus', JutsuController.create);
routes.post('/jutsus/associate', JutsuController.associateJutsuToCharacter);

routes.get('/characters', CharacterController.index);
routes.get('/characters/:name', CharacterController.show);

export default routes;
