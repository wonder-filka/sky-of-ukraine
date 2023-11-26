"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("reports", [
      {
        data: "report data 1",
        region: "report data location 1",
        title: "zvit 1 title",
        description: "zvit 1 description",
        photo_1: "zvit1.jpg",
        photo_2: "zvit1_1.jpg",
        link: "https://www.facebook.com/groups/neboukrainu/posts/969705084019061/",
        location: "Dnipro",
        publicationDate: new Date("2023-02-15"),
      },
      {
        data: "report data 2",
        region: "report data location 2",
        title: "zvit 2 title",
        description: "zvit 2 description",
        photo_1: "zvit2.jpg",
        photo_2: "zvit2_1.jpg",
        link: "https://www.facebook.com/groups/neboukrainu/posts/967645974224972/",
        location: "Dnipro",
        publicationDate: new Date("2023-02-12"),
      },
      {
        data: "report data 3",
        region: "report data location 3",
        title: "zvit 3 title",
        description: "zvit 3 description",
        photo_1: "zvit3.jpg",
        photo_2: "zvit3_1.jpg",
        link: "https://www.facebook.com/groups/neboukrainu/posts/804355370554034/",
        location: "Dnipro",
        publicationDate: new Date("2022-06-19"),
      },
      {
        data: "report data 4",
        region: "report data location 4",
        title: "zvit 4 title",
        description: "zvit 4 description",
        photo_1: "zvit4.jpg",
        photo_2: "zvit4_1.jpg",
        link: "https://www.facebook.com/groups/neboukrainu/posts/965964951059741/",
        location: "Kherson",
        publicationDate: new Date("2023-02-09"),
      },
      {
        data: "report data 5",
        region: "report data location 5",
        title: "zvit 5 title",
        description: "zvit 5 description",
        photo_1: "zvit5.jpg",
        photo_2: "zvit5_1.jpg",
        link: "https://www.facebook.com/groups/neboukrainu/posts/965645307758372/",
        location: "Kherson",
        publicationDate: new Date("2023-02-09"),
      },
      {
        data: "report data 6",
        region: "report data location 6",
        title: "zvit 6 title",
        description: "zvit 6 description",
        photo_1: "zvit6.jpg",
        photo_2: "zvit6_1.jpg",
        link: "https://www.facebook.com/groups/neboukrainu/posts/967115354278034/",
        location: "Luhansk",
        publicationDate: new Date("2023-02-11"),
      },
      {
        data: "report data 7",
        region: "report data location 7",
        title: "zvit 7 title",
        description: "zvit 7 description",
        photo_1: "zvit7.jpg",
        photo_2: "zvit7_1.jpg",
        link: "https://www.facebook.com/groups/neboukrainu/posts/964416884547881/",
        location: "Dnipro",
        publicationDate: new Date("2023-02-07"),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("reports");
  },
};
