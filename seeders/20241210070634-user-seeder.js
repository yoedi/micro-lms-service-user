'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [
      {
        name: "yoedi",
        profession: "Admin micro",
        role: "admin",
        email: "yoedi@gmail.com",
        password: await bcrypt.hash('admin', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "arianto",
        profession: "Front End Developer",
        role: "student",
        email: "arianto@gmail.com",
        password: await bcrypt.hash('student', 10),
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
