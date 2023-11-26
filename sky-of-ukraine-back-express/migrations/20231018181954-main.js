"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("projects", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      photo_title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      photo_main: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      meta: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      target_population: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      project_duration: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      international_donor: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      implementation_locations: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      households_to_assist: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      people_to_provide: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      partners: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      distribution_subject: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      region: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
    });

    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });

    await queryInterface.createTable("en", {
      keyi18n: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      value: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
    });

    await queryInterface.createTable("ukr", {
      keyi18n: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      value: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
    });

    await queryInterface.createTable("reports", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      region: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      photo_1: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      photo_2: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      link: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      publicationDate: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false, 
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("en");
    await queryInterface.dropTable("ukr");
    await queryInterface.dropTable("users");
    await queryInterface.dropTable("projects");
    await queryInterface.dropTable("reports");
  },
};
