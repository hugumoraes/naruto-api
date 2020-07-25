const sequelize = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('jutsus', {
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
    nature: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    kekkei_genkai: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
    },
    updated_at: {
      type: Sequelize.DATE,
    },
  }),

  down: async (queryInterface) => queryInterface.dropTable('jutsus'),
};
