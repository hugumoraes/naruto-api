import Sequelize from 'sequelize';

import Village from '../app/models/Village';
import Character from '../app/models/Character';
import Jutsu from '../app/models/Jutsu';

import databaseConfig from '../config/database';

const models = [Village, Character, Jutsu];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((m) => m.init(this.connection));

    models.map((m) => m.associate && m.associate(this.connection.models));
  }
}

export default new Database();
