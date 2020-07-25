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
      {
        name: 'Oodama Rasengan',
        nature: 'none',
        kekkei_genkai: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Chou Oodama Rasengan',
        nature: 'none',
        kekkei_genkai: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Chou Mini Bijūdama',
        nature: 'none',
        kekkei_genkai: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Bijuudama Rasenshuriken',
        nature: 'none',
        kekkei_genkai: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Youton Rasenshuriken',
        nature: 'none',
        kekkei_genkai: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Jiton Rasengan',
        nature: 'none',
        kekkei_genkai: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Rasenrangan',
        nature: 'none',
        kekkei_genkai: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Gudoudama',
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
