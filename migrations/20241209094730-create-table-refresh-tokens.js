'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('refresh_token', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      token: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });

    await queryInterface.addConstraint('refresh_token', {
      type: 'foreign key',
      fields: ['user_id'],
      references: {
        table: 'users',
        field: 'id'
      },
      name: 'REFRESH_TOKEN_USER_ID'
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('refresh_token');
  }
};
