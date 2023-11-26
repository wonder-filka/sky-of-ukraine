'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('users', [{
        username: 'admin',
        password: 'PassSky9384832',
      }], {});
   
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('users');
  }
};
