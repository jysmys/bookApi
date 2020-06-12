"use strict";

const models = require("../../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const thomas = models.Author.create({ name: "Thomas" });
    const jenny = models.Author.create({ name: "Jenny" });

    await queryInterface.bulkInsert(
      "Books",
      [
        {
          title: "Learn NodeJS with Thomas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Learn Sequelize with Adi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Books", null, {});
  },
};
