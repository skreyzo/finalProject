module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Abouts', [{
        toptext: '',
        bottomtext: '',
        address: '',
        phone: '',
        email: '',
        mainphotolink: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Abouts', null, {});    
  }
};
