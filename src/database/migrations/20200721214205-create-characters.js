const sequelize = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('characters', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      clan: {
        type: Sequelize.STRING,
      },
      village_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'villages',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      ninja_rank: {
        type: Sequelize.STRING,
      },
      sex: {
        type: Sequelize.STRING,
      },
      img: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
    }),

  down: async (queryInterface) => queryInterface.dropTable('characters'),
};
