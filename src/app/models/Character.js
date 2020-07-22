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
        jutsus: Sequelize.ARRAY(Sequelize.STRING),
        img: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Village, { foreignKey: 'village_id' });
  }
}

export default Character;
