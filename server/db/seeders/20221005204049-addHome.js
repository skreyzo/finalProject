module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Homes', [{
        greeting: '',
        bigfoto: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Homes', null, {});    
  }
};
