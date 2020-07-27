module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('jutsus', [
      {
        name: 'Kage Bushin no Jutsu',
        nature: 'none',
        kekkei_genkai: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Jutsu Sexy',
        nature: 'none',
        kekkei_genkai: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Kuchiyose no Jutsu',
        nature: 'none',
        kekkei_genkai: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Rasengan',
        nature: 'none',
        kekkei_genkai: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Rasen-Shuriken',
        nature: 'none',
        kekkei_genkai: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('jutsus', null, {});
  },
};
