import Sequelize, { Model } from 'sequelize';

class Character extends Model {
  static init(sequelize) {
    super.init(
      {
        first_name: Sequelize.STRING,
        last_name: Sequelize.STRING,
        clan: Sequelize.STRING,
        village_id: Sequelize.INTEGER,
        ninja_rank: Sequelize.STRING,
        sex: Sequelize.STRING,
        img: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'characters',
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Village, { foreignKey: 'village_id' });
    this.belongsToMany(models.Jutsu, { foreignKey: 'character_id', through: 'characters_jutsus' });
  }
}

export default Character;
