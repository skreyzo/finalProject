"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Events",
      [
        {
          title: "Exploring English: literature",
          description: "Watch a recording of the live event to support our FutureLearn Exploring English: language and culture online course.",
          ticket: 325,
          price: 2.5,
          address: "221b, Baker Street, London",
          coordinat: "",
          eventphotolink: "img/events/1.jpg",

          dataTime: "17:45 15-10-2022",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Exploring English: food and culture",
          description: "Watch a recording of the Live event to support our FutureLearn Exploring English: food and culture online course.",
          ticket: 112,
          price: 3.5,
          address: "118, Main Street, London",
          coordinat: "",
          eventphotolink: "img/events/2.jpg",

          dataTime: "18:45 16-10-2022",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "English for the workplace",
          description: "Watch a recording of a live event which supports our FutureLearn English for the Workplace online course. What is the event about? This live event supports our FutureLearn English for the Workplace online course. Listen to our educators, Genny and David, discuss the topic with Neil as well as answering questions from you, the viewing audience. Practise your listening and learn new language related to the world of work.",
          ticket: 12,
          price: 3.12,
          address: "111, Full Street, London",
          coordinat: "",
          eventphotolink: "img/events/3.jpg",

          dataTime: "19:45 25-10-2022",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Exploring English: language and culture",
          description: "Watch a recording of the live event which supports our FutureLearn Exploring English: language and culture online course. This live event supports our FutureLearn Exploring English: language and culture course. Listen to our educators, Sally, Chris and Neil, discuss the topic of the language and culture in the UK as well as answering questions from you, the viewing audience. ",
          ticket: 12,
          price: 3.12,
          address: "111, Full Street, London",
          coordinat: "",
          eventphotolink: "img/events/4.jpg",

          dataTime: "17:00 11-11-2022",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Shakespeare",
          description: "Watch a recording of the live event which supports our FutureLearn Exploring English: Shakespeare online course. ",
          ticket: 102,
          price: 3.9,
          address: "11, Killer Street, London",
          coordinat: "",
          eventphotolink: "img/events/5.jpg",

          dataTime: "19:00 13-11-2022",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "LearnEnglish Lessons: Art",
          description: "Watch a recording of the live event to support our LearnEnglish for the Workplace self-access course.",
          ticket: 10,
          price: 3.7,
          address: "998, Angular Street, London",
          coordinat: "",
          eventphotolink: "img/events/6.jpg",

          dataTime: "20:00 16-11-2022",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "LearnEnglish for the Workplace: Working in a team",
          description: "Watch a recording of the live event to support our LearnEnglish for the Workplace self-access course.",
          ticket: 100,
          price: 1.2,
          address: "99098, Vie Street, London",
          coordinat: "",
          eventphotolink: "img/events/7.jpg",

          dataTime: "20:00 16-11-2022",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "LearnEnglish Lessons: Lifestyles",
          description: "Live event to support our LearnEnglish Lessons self-access course.",
          ticket: 10,
          price: 1.5,
          address: "987, React Street, London",
          coordinat: "",
          eventphotolink: "img/events/8.jpg",

          dataTime: "20:00 16-11-2022",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Events", null, {});
  },
};
