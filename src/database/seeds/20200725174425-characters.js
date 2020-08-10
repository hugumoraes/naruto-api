module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'characters',
      [
        {
          name: 'uzumaki naruto',
          clan: 'uzumaki',
          village_id: 4,
          ninja_rank: 'genin',
          sex: 'masculine',
          img:
            'https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_450x337.png',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'uchiha sasuke',
          clan: 'uchiha',
          village_id: 4,
          ninja_rank: 'genin',
          sex: 'masculine',
          img:
            'https://i0.wp.com/www.fatosdesconhecidos.com.br/wp-content/uploads/2018/04/sasuke-e1487087756673.png?resize=600,450',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'haruno sakura',
          clan: 'haruno',
          village_id: 4,
          ninja_rank: 'chunnin',
          sex: 'feminine',
          img:
            'https://vignette.wikia.nocookie.net/naruto/images/c/cf/Sakura_%28Naruto_Cl%C3%A1ssico%29.png/revision/latest?cb=20180211141243&path-prefix=pt-br',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'hatake kakashi',
          clan: 'hatake',
          village_id: 4,
          ninja_rank: 'jounin',
          sex: 'masculine',
          img:
            'https://pbs.twimg.com/profile_images/922530905889083396/alDFqgh8_400x400.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('characters', null, {});
  },
};
