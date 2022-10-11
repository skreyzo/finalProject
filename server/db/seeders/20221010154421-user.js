'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [{
        firstName: 'John',
        lastName: 'Smith',
        email: 'petyapetrov432@gmail.com',
        password: '$2b$05$k/bxznXnLqF6O4Uc0FzV2OQVUFLa1iWIkwyETZdxXS5g3jCNHB8GG',
        isActivated: 'true',
        isAdmin: 'true',
        activationLink: 'null',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};