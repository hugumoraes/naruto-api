const sequelize = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('characters_jutsus', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      character_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'characters',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      jutsu_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'jutsus',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
    }),

  down: async (queryInterface) => queryInterface.dropTable('characters_jutsus'),
};
