module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'villages',
      [
        {
          name: 'Hidden Mist Village',
          country: 'Water Country',
          kage: 'Mizukage',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Hidden Cloud Village',
          country: 'Lightning Country',
          kage: 'Raikage',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Hidden Rock Village',
          country: 'Earth Country',
          kage: 'Tsuchikage',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Hidden Leaf Village',
          country: 'Fire Country',
          kage: 'Hokage',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Hidden Sand Village',
          country: 'Wind Country',
          kage: 'Kazekage',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('villages', null, {});
  },
};
