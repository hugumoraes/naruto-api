import Sequelize, { Model } from 'sequelize';

class Village extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        country: Sequelize.STRING,
        kage: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );
  }
}

export default Village;
