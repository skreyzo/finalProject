"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "News",
      [
        {
          id: "1",
          title: "Название новости 1",
          body: "текст новости 1",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "2",
          title: "Название новости 2",
          body: "текст новости 2",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "3",
          title: "Название новости 3",
          body: "текст новости 3",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("News", null, {});
  },
};
