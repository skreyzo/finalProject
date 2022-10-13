'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Events', [
      {
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis erat quis mauris tincidunt, vitae hendrerit ipsum varius. Nulla non metus in leo ultricies vulputate. Phasellus ut dolor eget tortor porttitor volutpat a eu leo. Sed at libero nunc. Curabitur sed laoreet arcu. Fusce mauris nisi, suscipit tincidunt efficitur eu, elementum non enim. Etiam aliquet hendrerit velit, id gravida nibh. Vestibulum ac dictum massa. Ut auctor hendrerit erat vel facilisis. Maecenas vehicula ut leo eget imperdiet.',
      ticket: 325,
      price: 2.5,
      address: '221b, Baker Street, London',
      coordinat: '',
      eventphotolink: '/public/eventimg/Без названия.jpg',
      eventdate: '',
      createdAt: new Date(),
      updatedAt: new Date(),
      },
    ], {});  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Events', null, {});
  }
};
