'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 await queryInterface.bulkInsert('projects', [
      {
        name: 'name title proj 1',
        photo_title: 'project1.jpg',
        photo_main: 'projectmain1.jpg', 
        meta: 'goal proj 1',
        target_population: 'target proj 1',
        project_duration: 'time proj 1',
        international_donor: 'donor proj 1',
        implementation_locations: 'locations proj 1',
        households_to_assist: 'households proj 1',
        people_to_provide: 'people proj 1',
        partners: 'partners proj 1',
        distribution_subject: 'subject 1',
        region: 'Kharkiv'
      },
          {
        name: 'name title proj 2',
        photo_title: 'project2.jpg',
        photo_main: 'projectmain2.jpg', 
        meta: 'goal proj 2',
        target_population: 'target proj 2',
        project_duration: 'time proj 2',
        international_donor: 'donor proj 2',
        implementation_locations: 'locations proj 2',
        households_to_assist: 'households proj 2',
        people_to_provide: 'people proj 2',
        partners: 'partners proj 2',
        distribution_subject: 'subject 2',
        region: 'Kharkiv'
      },
      {
  name: 'name title proj 3',
  photo_title: 'project3.jpg',
  photo_main: 'projectmain3.jpg',
  meta: 'goal proj 3',
  target_population: 'target proj 3',
  project_duration: 'time proj 3',
  international_donor: 'donor proj 3',
  implementation_locations: 'locations proj 3',
  households_to_assist: 'households proj 3',
  people_to_provide: 'people proj 3',
  partners: 'partners proj 3',
  distribution_subject: 'subject 3',
  region: 'Donetsk'
},

{
  name: 'name title proj 4',
  photo_title: 'project4.jpg',
  photo_main: 'projectmain4.jpg',
  meta: 'goal proj 4',
  target_population: 'target proj 4',
  project_duration: 'time proj 4',
  international_donor: 'donor proj 4',
  implementation_locations: 'locations proj 4',
  households_to_assist: 'households proj 4',
  people_to_provide: 'people proj 4',
  partners: 'partners proj 4',
  distribution_subject: 'subject 4',
  region: 'Dnipro'
},

{
  name: 'name title proj 5',
  photo_title: 'project5.jpg',
  photo_main: 'projectmain5.jpg',
  meta: 'goal proj 5',
  target_population: 'target proj 5',
  project_duration: 'time proj 5',
  international_donor: 'donor proj 5',
  implementation_locations: 'locations proj 5',
  households_to_assist: 'households proj 5',
  people_to_provide: 'people proj 5',
  partners: 'partners proj 5',
  distribution_subject: 'subject 5',
  region: 'Kherson'
}, 
{
  name: 'name title proj 6',
  photo_title: 'project6.jpg',
  photo_main: 'projectmain6.jpg',
  meta: 'goal proj 6',
  target_population: 'target proj 6',
  project_duration: 'time proj 6',
  international_donor: 'donor proj 6',
  implementation_locations: 'locations proj 6',
  households_to_assist: 'households proj 6',
  people_to_provide: 'people proj 6',
  partners: 'partners proj 6',
  distribution_subject: 'subject 6',
  region: 'Mykolaiv'
},

{
  name: 'name title proj 7',
  photo_title: 'project7.jpg',
  photo_main: 'projectmain7.jpg',
  meta: 'goal proj 7',
  target_population: 'target proj 7',
  project_duration: 'time proj 7',
  international_donor: 'donor proj 7',
  implementation_locations: 'locations proj 7',
  households_to_assist: 'households proj 7',
  people_to_provide: 'people proj 7',
  partners: 'partners proj 7',
  distribution_subject: 'subject 7',
  region: 'Kherson'
}
    ]);
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('projects');
  }
};
