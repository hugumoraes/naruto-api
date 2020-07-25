import Sequelize, { Model } from 'sequelize';

class Jutsu extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        nature: Sequelize.STRING,
        kekkei_genkai: Sequelize.BOOLEAN,
      },
      {
        sequelize,
        tableName: 'jutsus',
      },
    );
  }

  static associate(models) {
    this.belongsToMany(models.Character, { foreignKey: 'character_id', through: 'characters_jutsus' });
  }
}

export default Jutsu;
