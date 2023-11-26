'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('en', [
  {
    "keyi18n": "nav home",
    "value": "Home"
  },
  {
    "keyi18n": "nav projects",
    "value": "Projects"
  },
  {
    "keyi18n": "nav reports",
    "value": "Reports"
  },
  {
    "keyi18n": "nav about",
    "value": "About us"
  },
  {
    "keyi18n": "btn need help",
    "value": "Request support"
  },
  {
    "keyi18n": "btn get help",
    "value": "Donate"
  },
  {
    "keyi18n": "footer nav",
    "value": "Navigation"
  },
  {
    "keyi18n": "footer nav main",
    "value": "Home"
  },
  {
    "keyi18n": "footer nav about",
    "value": "About"
  },
  {
    "keyi18n": "footer nav projects",
    "value": "Projects"
  },
  {
    "keyi18n": "footer nav reports",
    "value": "Reports"
  },
  {
    "keyi18n": "footer nav contacts",
    "value": "Contacts"
  },
  {
    "keyi18n": "header title",
    "value": "The Sky of Ukraine Charity Foundation"
  },
  {
    "keyi18n": "header p",
    "value": "We help communities, medical institution, IDPs and military personnel who are fighting for the territorial integrity, victory and bright future of Ukraine"
  },
  {
    "keyi18n": "about us title",
    "value": "About us"
  },
  {
    "keyi18n": "our team title",
    "value": "Our team"
  },
  {
    "keyi18n": "partners title",
    "value": "Partners"
  },
  {
    "keyi18n": "help title",
    "value": "Help"
  },
  {
    "keyi18n": "actual projects title",
    "value": "Current Projects"
  },
  {
    "keyi18n": "reports title",
    "value": "Reports"
  },
  {
    "keyi18n": "who we are title",
    "value": "Who we are"
  },
  {
    "keyi18n": "how we work title",
    "value": "How we work"
  },
  {
    "keyi18n": "our motivation title",
    "value": "Our motivation"
  },
  {
    "keyi18n": "who we are p",
    "value": "We are a charity foundation that helps civilians who have suffered as a result of the Russian invasion of Ukraine, also we help our soldiers on the front lines."
  },
  {
    "keyi18n": "how we work p",
    "value": "We are a charity foundation that helps civilians who have suffered as a result of the Russian invasion of Ukraine, also we help our soldiers on the front lines."
  },
  {
    "keyi18n": "our motivation p",
    "value": "To help both the ordinary people who are in need of help, and to our soldiers in this difficult time for our country. Making the world a better place."
  },
  {
    "keyi18n": "team secod title",
    "value": "We are a young team"
  },
  {
    "keyi18n": "team secod p",
    "value": "Made up of different people, with different worldviews, yet united by a single goal - to help people and to make the world a better place, we all take part in this. We try to uncover the talents of each volunteer and to find the best place where his/her talents can be realized"
  },
  {
    "keyi18n": "btn partners",
    "value": "Details"
  },
  {
    "keyi18n": "partner 1 title",
    "value": "CHARITY ORGANIZATION \"SAMARITAN'S PURSE UKRAINE\" CHARITY FUND"
  },
  {
    "keyi18n": "partner 2 title",
    "value": "CHARITY FUND CO \"EUROPEAN TRADITIONS OF CHARITY\""
  },
  {
    "keyi18n": "partner 3 title",
    "value": "CHARITY ORGANIZATION \"CHARITY FUND OUR HEART-UKRAINE\""
  },
  {
    "keyi18n": "partner 4 title",
    "value": "CHARITY ORGANIZATION \"CHARITY FUND EMAUS UKRAINE\" "
  },
  {
    "keyi18n": "partner 5 title",
    "value": "PUBLIC ORGANIZATION \"IRON ANGELS\""
  },
  {
    "keyi18n": "partner 6 title",
    "value": "CHARITY ORGANIZATION (\"CHARITABLE ASSOCIATION OF THE NATION\") CHARITY FUND"
  },
  {
    "keyi18n": "partner 7 title",
    "value": "CHARITY FUND \"GOOD KR\""
  },
  {
    "keyi18n": "partner 8 title",
    "value": "PUBLIC ORGANIZATION \"KHARKIV SYCH\""
  },
  {
    "keyi18n": "partner 9 title",
    "value": "UKRAINIAN CHURCH OF CHRISTIANS OF THE EVANGELICAL FAITH"
  },
  {
    "keyi18n": "partner 10 title",
    "value": "PUBLIC ORGANIZATION \"CYCLING VOLUNTEERS OF KHARKOV\""
  },
  {
    "keyi18n": "partner 1 p",
    "value": "The organization provides spiritual and physical assistance to affected people around the world. (Humanitarian and medical aid, aid to victims and displaced persons)."
  },
  {
    "keyi18n": "partner 2 p",
    "value": "An organization engaged in assistance in three areas: medical assistance, assistance to the elderly and people with disabilities, and project activities."
  },
  {
    "keyi18n": "partner 3 p",
    "value": "The organization was created to help the citizens of Ukraine, who got into a difficult situation due to the aggression of Russia, and our brave Defenders who defend our state! (evacuation, support for the disabled, displaced persons, assistance to hospitals and the Armed Forces)."
  },
  {
    "keyi18n": "partner 4 p",
    "value": "The organization provides assistance to the civilian population affected by hostilities, procures and provides humanitarian aid in the de-occupied regions."
  },
  {
    "keyi18n": "partner 5 p",
    "value": "One of the main directions of the work of the organization is to provide residents of de-occupied villages of the Kherson region with humanitarian kits. These are food, medicines, hygiene products, water, toys and stationery for children. We are constantly monitoring and cooperating with the heads of villages and local government."
  },
  {
    "keyi18n": "partner 6 p",
    "value": "The organization helps the Armed Forces, supports families of defenders with children who are on the front line, in captivity or died, provides legal assistance to military personnel and their families."
  },
  {
    "keyi18n": "partner 7 p",
    "value": "The fund provides humanitarian aid in the form of food kits for IDPs registered in Kryvyi Rih. Also supports local communities and military units. Contributes to improving the provision of hospitals and military hospitals with medical preparations, equipment, specialized medical furniture, consumables, etc."
  },
  {
    "keyi18n": "partner 8 p",
    "value": "The purpose of the organization: to unite the experience and efforts of specialists of various professions and areas of activity to promote the protection of rights and freedoms and the development of citizens of Ukraine."
  },
  {
    "keyi18n": "partner 9 p",
    "value": "The church provides assistance with evacuations, providing humanitarian aid to families affected by military aggression"
  },
  {
    "keyi18n": "help second title",
    "value": "We work on many different fronts"
  },
  {
    "keyi18n": "help p",
    "value": "We purchase and search for various products, from personal hygiene products to military equipment"
  },
  {
    "keyi18n": "help list-item 1",
    "value": "Humanitarian Aid"
  },
  {
    "keyi18n": "help list-item 2",
    "value": "Assistance to Medical Institutions"
  },
  {
    "keyi18n": "help list-item 3",
    "value": "Aid to the Military"
  },
  {
    "keyi18n": "btn projects",
    "value": "Detailed"
  },
  {
    "keyi18n": "project 1 title",
    "value": "\"HUMANITARIAN ASSISTANCE TO KHARKIV\" PROJECT"
  },
  {
    "keyi18n": "project 1 p",
    "value": "The goal of the project: to support the residents of the city of Kharkiv and the Kharkiv region with food, hygiene products, lanterns, water filters, clothes and other important things in the conditions of a humanitarian crisis."
  },
  {
    "keyi18n": "project 2 title",
    "value": "PROJECT \"HUMANITARIAN AID TO DNIPRO REGION\""
  },
  {
    "keyi18n": "project 2 p",
    "value": "The goal of the project: to support the residents of the front-line towns and villages of the Dnipro region with food products, hygiene products, lanterns, water filters and other important things in the conditions of the humanitarian crisis."
  },
  {
    "keyi18n": "project 3 title",
    "value": "PROJECT \"HUMANITARIAN AID MYKOLAIV-ODESCHINA\""
  },
  {
    "keyi18n": "project 3 p",
    "value": "The goal of the project: to support the residents of the front-line city of Mykolaiv and IDPs living in the villages and cities of the Oleska region with food, hygiene products, lanterns, water filters and other important things in the conditions of the humanitarian crisis."
  },
  {
    "keyi18n": "project 4 title",
    "value": "PROJECT \"HUMANITARIAN AID MYKOLAIV-ODESCHINA\""
  },
  {
    "keyi18n": "project 4 p",
    "value": "The goal of the project: to support the residents of the front-line city of Mykolaiv and IDPs living in the villages and cities of the Oleska region with food, hygiene products, lanterns, water filters and other important things in the conditions of the humanitarian crisis."
  },
  {
    "keyi18n": "project 5 title",
    "value": "\"WARM KHERSON\" PROJECT"
  },
  {
    "keyi18n": "project 5 p",
    "value": "The goal of the project: to provide partially destroyed households located in the zone affected by hostilities in the de-occupied part of Kherson region with materials necessary to equip one room in the house, protected from weather conditions with a heating source."
  },
  {
    "keyi18n": "project 6 title",
    "value": "\"Additional firewood\" PROJECT"
  },
  {
    "keyi18n": "project 6 p",
    "value": "The goal of the project: to provide firewood for heating to residents of de-occupied settlements of the Kherson region."
  },
  {
    "keyi18n": "project 7 title",
    "value": "\"WARM DNIPRO - KHERSON\" PROJECT"
  },
  {
    "keyi18n": "project 7 p",
    "value": "The goal of the project is to prepare 500 households in Dnipro (200 households) and Kherson (300 households) regions for winter by providing them with a wood-burning stove and firewood to heat one room in their house."
  },
  {
    "keyi18n": "project 8 title",
    "value": "PROJECT \"HUMANITARIAN AID TO KHERSON REGION\""
  },
  {
    "keyi18n": "project 8 p",
    "value": "The goal of the project: to support the residents of the de-occupied and front-line cities and villages of the Kherson region with food, hygiene products, lanterns, water filters and other important things in the conditions of a humanitarian crisis."
  },
  {
    "keyi18n": "btn report get more",
    "value": "Read more"
  },
  {
    "keyi18n": "report data home",
    "value": "February 09, 2023"
  },
  {
    "keyi18n": "report data 1 home",
    "value": "February 09, 2023"
  },
  {
    "keyi18n": "report data 2 home",
    "value": "June 19, 2022"
  },
  {
    "keyi18n": "report data 3 home",
    "value": "February 12, 2023"
  },
  {
    "keyi18n": "report data 1",
    "value": "February 15, 2023"
  },
  {
    "keyi18n": "report data location 1",
    "value": "Dnipro region"
  },
  {
    "keyi18n": "report data 2",
    "value": "February 12, 2023"
  },
  {
    "keyi18n": "report data location 2",
    "value": "Dnipro region"
  },
  {
    "keyi18n": "report data 3",
    "value": "June 19, 2022"
  },
  {
    "keyi18n": "report data location 3",
    "value": "Dnipro region"
  },
  {
    "keyi18n": "report data 4",
    "value": "February 09, 2023"
  },
  {
    "keyi18n": "report data location 4",
    "value": "Kherson region"
  },
  {
    "keyi18n": "report data 5",
    "value": "February 09, 2023"
  },
  {
    "keyi18n": "report data location 5",
    "value": "Kherson region"
  },
  {
    "keyi18n": "report data 6",
    "value": "February 11, 2023"
  },
  {
    "keyi18n": "report data location 6",
    "value": "Luhansk direction"
  },
  {
    "keyi18n": "report data 7",
    "value": "February 07, 2023"
  },
  {
    "keyi18n": "report data location 7",
    "value": "Dnipro region"
  },
  {
    "keyi18n": "report 1 title",
    "value": "Assistance for the Apostolic Hospital"
  },
  {
    "keyi18n": "report 1 p",
    "value": "The \"SKY OF UKRAINE\" charity foundation, with the support from our friend Anna Yashna from the city of Novomoskovsk, provided vitally important medical supplies to the Apostoliv hospital."
  },
  {
    "keyi18n": "report 2 title",
    "value": "Assistance for the Apostolic Hospital"
  },
  {
    "keyi18n": "report 2 p",
    "value": "The \"SKY OF UKRAINE\" charity foundation, with the support from our friend Anna Yashna from the city of Novomoskovsk, provided vitally important medical supplies to the Apostoliv hospital."
  },
  {
    "keyi18n": "report 3 title",
    "value": "Assistance for the Apostolic Hospital"
  },
  {
    "keyi18n": "report 3 p",
    "value": "The \"SKY OF UKRAINE\" charity foundation, with the support from our friend Anna Yashna from the city of Novomoskovsk, provided vitally important medical supplies to the Apostoliv hospital."
  },
  {
    "keyi18n": "report 4 title",
    "value": "Assistance for the Apostolic Hospital"
  },
  {
    "keyi18n": "report 4 p",
    "value": "The \"SKY OF UKRAINE\" charity foundation, with the support from our friend Anna Yashna from the city of Novomoskovsk, provided vitally important medical supplies to the Apostoliv hospital."
  },
  {
    "keyi18n": "map title",
    "value": "Map"
  },
  {
    "keyi18n": "map second title",
    "value": "Information about regions"
  },
  {
    "keyi18n": "map p",
    "value": "Use the map to track projects in the regions"
  },
  {
    "keyi18n": "map projects title",
    "value": "Information by regions"
  },
  {
    "keyi18n": "Kyiv",
    "value": "Kyiv"
  },
  {
    "keyi18n": "volyn",
    "value": "Volyn region"
  },
  {
    "keyi18n": "rivne",
    "value": "Rivne region"
  },
  {
    "keyi18n": "zhytomyr",
    "value": "Zhytomyr region"
  },
  {
    "keyi18n": "kyiv",
    "value": "Kyiv region"
  },
  {
    "keyi18n": "kyiv-city",
    "value": "Kyiv city"
  },
  {
    "keyi18n": "chernihiv",
    "value": "Chernihiv region"
  },
  {
    "keyi18n": "sumy",
    "value": "Summy region"
  },
  {
    "keyi18n": "lviv",
    "value": "Lviv region"
  },
  {
    "keyi18n": "ternopil",
    "value": "Ternopil region"
  },
  {
    "keyi18n": "khmelnytskyi",
    "value": "Khmelnytskyy region"
  },
  {
    "keyi18n": "vinnytsia",
    "value": "Vinnytsya region"
  },
  {
    "keyi18n": "cherkasy",
    "value": "Cherkasy region"
  },
  {
    "keyi18n": "poltava",
    "value": "Poltava region"
  },
  {
    "keyi18n": "kharkiv",
    "value": "Kharkiv region"
  },
  {
    "keyi18n": "zakarpattia",
    "value": "Zakarpattya region"
  },
  {
    "keyi18n": "ivano-frankivsk",
    "value": "Ivano-Frankivsk region"
  },
  {
    "keyi18n": "chernivtsi",
    "value": "Chernivtsy region"
  },
  {
    "keyi18n": "kirovohrad",
    "value": "Kirovohrad region"
  },
  {
    "keyi18n": "Dnipro",
    "value": "Dnipro region"
  },
  {
    "keyi18n": "donetsk",
    "value": "Donetsk region"
  },
  {
    "keyi18n": "luhansk",
    "value": "Luhansk region"
  },
  {
    "keyi18n": "odessa",
    "value": "Odessa region"
  },
  {
    "keyi18n": "mykolaiv",
    "value": "Mykolayiv region"
  },
  {
    "keyi18n": "kherson",
    "value": "Kherson region"
  },
  {
    "keyi18n": "zaporizhia",
    "value": "Zaporizhia region"
  },
  {
    "keyi18n": "crimea",
    "value": "Autonomous Republic of Crimea"
  },
  {
    "keyi18n": "reports page last title",
    "value": "Last reports"
  },
  {
    "keyi18n": "reports page title",
    "value": "Reports"
  },
  {
    "keyi18n": "about page title",
    "value": "About us"
  },
  {
    "keyi18n": "form title",
    "value": "Ask for help"
  },
  {
    "keyi18n": "form btn",
    "value": "Send"
  },
  {
    "keyi18n": "form sent text",
    "value": "Information was sent!"
  },
  {
    "keyi18n": "form name title",
    "value": "Name"
  },
  {
    "keyi18n": "form name placeholder",
    "value": "Enter Name"
  },
  {
    "keyi18n": "form phone title",
    "value": "Phone"
  },
  {
    "keyi18n": "form phone placeholder",
    "value": "Enter Phone"
  },
  {
    "keyi18n": "form email title",
    "value": "Email"
  },
  {
    "keyi18n": "form email placeholder",
    "value": "Enter Email"
  },
  {
    "keyi18n": "form type help title",
    "value": "Type of help"
  },
  {
    "keyi18n": "form type help val 1",
    "value": "Humanitarian help"
  },
  {
    "keyi18n": "form type help val 2",
    "value": "Medicaid"
  },
  {
    "keyi18n": "form type help val 3",
    "value": "Military aid"
  },
  {
    "keyi18n": "form message title",
    "value": "Message"
  },
  {
    "keyi18n": "form message placeholder",
    "value": "Enter Message"
  },
  {
    "keyi18n": "requisites",
    "value": "Bank details"
  },
  {
    "keyi18n": "requisites title UAH",
    "value": "UAH account"
  },
  {
    "keyi18n": "requisites title USD",
    "value": "USD account"
  },
  {
    "keyi18n": "requisites title EUR",
    "value": "EUR account"
  },
  {
    "keyi18n": "requisites second title",
    "value": "Recipient:"
  },
  {
    "keyi18n": "Company details",
    "value": "Company details:"
  },
  {
    "keyi18n": "Company name",
    "value": "Company name:"
  },
  {
    "keyi18n": "IBAN Code",
    "value": "IBAN Code:"
  },
  {
    "keyi18n": "Name of the bank",
    "value": "Name of the bank:"
  },
  {
    "keyi18n": "Bank SWIFT Code",
    "value": "Bank SWIFT Code:"
  },
  {
    "keyi18n": "Company address",
    "value": "Company address:"
  },
  {
    "keyi18n": "Recipient's name",
    "value": "Recipient's name:"
  },
  {
    "keyi18n": "Recipient's code",
    "value": "Recipient's code:"
  },
  {
    "keyi18n": "Correspondent banks",
    "value": "Correspondent banks:"
  },
  {
    "keyi18n": "Account in the correspondent bank",
    "value": "Account in the correspondent bank:"
  },
  {
    "keyi18n": "SWIFT Code of the correspondent bank",
    "value": "SWIFT Code of the correspondent bank:"
  },
  {
    "keyi18n": "Correspondent bank",
    "value": "Correspondent bank:"
  },
  {
    "keyi18n": "or",
    "value": "or"
  },
  {
    "keyi18n": "Currency",
    "value": "Currency"
  },
  {
    "keyi18n": "about page name",
    "value": "CHARITY ORGANIZATION \"NEBO UKRAINE\" FOUNDATION"
  },
  {
    "keyi18n": "about page p1",
    "value": "Volunteers who are part of the Charitable Foundation have been engaged in humanitarian aid to medical institutions, IDPs, the Armed Forces of Ukraine, and TRO since the first day of the war in Ukraine. All the work of the team was directed to effective help and getting closer to the victory over the invaders, not to PR and advertising, so until June, nothing was published or disclosed about the activities of the organization. "
  },
  {
    "keyi18n": "about page p2",
    "value": "At this stage, the scope of the team's work has increased many times and there was a need to register the Charitable Foundation to publicly highlight the results and reports of our activities. First of all, this is related to the transparency of our actions in cooperation with local communities, other foundations, and organizations, as well as the significant expansion of the important work we do in Ukraine and beyond. "
  },
  {
    "keyi18n": "about page p3",
    "value": "Our functioning during the difficult 3 months became possible thanks to the support of the Apostolic community, the Kryvorizka district, and the following charitable organizations and volunteers: "
  },
  {
    "keyi18n": "about page vol 1",
    "value": "the Apostolic Mercy Movement"
  },
  {
    "keyi18n": "about page vol 2",
    "value": "Apostolic emergencies"
  },
  {
    "keyi18n": "about page vol 3",
    "value": "Public organization \"Youth with a mission - Ternopil\""
  },
  {
    "keyi18n": "about page vol 4",
    "value": "Charity Fund \"UKRAINIAN BEAR\""
  },
  {
    "keyi18n": "about page vol 5",
    "value": "Charity Fund \"UKRAINE IN CONNECTION\""
  },
  {
    "keyi18n": "about page vol 6",
    "value": "Charitable Foundation \"St. Nicholas the Patron\""
  },
  {
    "keyi18n": "about page vol 7",
    "value": "Vinnytsia Jewish Messianic Community"
  },
  {
    "keyi18n": "about page vol 8",
    "value": "Entrepreneurs and volunteers of Apostoliv Region, Kyiv Region, Lviv Region, Chernivtsi, and Novomoskovsk."
  },
  {
    "keyi18n": "about page p4",
    "value": "Our goal, first of all, is humanitarian aid to citizens affected by the war in Ukraine, humanitarian aid to communities, hospitals, and hospitals located on the front line, in the occupied and liberated territories, the Armed Forces of Ukraine and TRO of Ukraine."
  },
  {
    "keyi18n": "about page p5",
    "value": "During the entire period of our team's work before the opening of the Fund, about 35 tons of humanitarian aid was provided to the following regions: "
  },
  {
    "keyi18n": "about page reg 1",
    "value": "IDPs of the Apostoliv community of Kryvorizka district"
  },
  {
    "keyi18n": "about page reg 2",
    "value": "VPO of Buchansk community"
  },
  {
    "keyi18n": "about page reg 3",
    "value": "IDPs of Kharkiv Region"
  },
  {
    "keyi18n": "about page reg 4",
    "value": "Socially unprotected persons of Kharkiv Region"
  },
  {
    "keyi18n": "about page reg 5",
    "value": "To the frontline hospitals and hospitals of Apostolov, Gulyaipole, Kharkiv Region and the city of Kharkiv"
  },
  {
    "keyi18n": "about page reg 6",
    "value": "Armed Forces of Ukraine and other military personnel of Kryvyi Rih, Luhansk, Donetsk and Kharkiv directions"
  },
  {
    "keyi18n": "Account det p",
    "value": "Currently, the \"SKY OF UKRAINE\" Charitable Fund has open hryvnia and foreign currency accounts for the possibility of supporting the activities of our organization by all those who wish to do so."
  },
  {
    "keyi18n": "zvit btn link",
    "value": "See more"
  },
  {
    "keyi18n": "zvit num proj",
    "value": "Projects"
  },
  {
    "keyi18n": "zvit num money",
    "value": "Funds have been collected"
  },
  {
    "keyi18n": "zvit num donats",
    "value": "Number of Donations"
  },
  {
    "keyi18n": "zvit 1 title",
    "value": "Aid to internally displaced persons in Kryvyi Rih who were evacuated from the Kherson region."
  },
  {
    "keyi18n": "zvit 2 title",
    "value": "Aid to the disabled, those with many children and the poor living in the territory of the May Day community of the Nikopol district of the Dnipro region"
  },
  {
    "keyi18n": "zvit 3 title",
    "value": "Helping to our defenders"
  },
  {
    "keyi18n": "zvit 4 title",
    "value": "Aid with firewood in the village of Osokorivka, Beryslav district, Kherson region"
  },
  {
    "keyi18n": "zvit 5 title",
    "value": "Help with insulation of buildings in the Kherson region"
  },
  {
    "keyi18n": "zvit 6 title",
    "value": "Help to our defenders in Luhansk"
  },
  {
    "keyi18n": "zvit 7 title",
    "value": "Aid to the poor and disabled in the village of Niva Trudova, Kryvorizka District"
  },
  {
    "keyi18n": "zvit 1 description",
    "value": "Photo reports of the distribution of food kits for the last decade of January 2023 to internally displaced persons in the city of Kryvyi Rih who were evacuated from the Kherson region. Our organization assisted the residents of the following communities of the Beryslav district: Beryslavska, Novooleksandrivska, Tyaginska, Mylivska, Velikoleksandrivska, Visokopilska, Kalinivska, Borozenska, Novoraiska. In total, our organization assisted about 300 IDPs!"
  },
  {
    "keyi18n": "zvit 2 description",
    "value": "Photo reports of the distribution of food kits to IDPs, the disabled, those with many children, and the poor people who live in the territory of the May Day community of the Nikopol district of the Dnipro region. In total, our organization assisted about 400 families in January! Many thanks for the promptness of the local leadership of the community!"
  },
  {
    "keyi18n": "zvit 3 description",
    "value": "Volunteers of our foundation, together with entrepreneurs of Apostolivshchyna, assisted in protecting our defenders! Glory to Ukraine!"
  },
  {
    "keyi18n": "zvit 4 description",
    "value": "The fund brought and distributed an additional 312 cubic meters of hardwood firewood to the village of Osokorivka, Berislav district, Kherson region. Many thanks for the powerful support of our international partners to the charity fund \"Samaritan's Purse Ukraine\". We also again note the prompt, selfless and selfless help of the local leaders and activists of the village of Osokorivka in implementing such important and complex projects!"
  },
  {
    "keyi18n": "zvit 5 description",
    "value": "Photo reports of the installed 70 boilers within the framework of the Kherson region's final 8th round of the warming program. Many thanks for the support of our international partners of the charity fund \"Samaritan's Purse Ukraine\""
  },
  {
    "keyi18n": "zvit 6 description",
    "value": "Our organization sent lanterns, hygiene products and canned meat to our defenders in the Luhansk direction. Many thanks to the troops of the Armed Forces of Ukraine! Glory to Ukraine!"
  },
  {
    "keyi18n": "zvit 7 description",
    "value": "Thanks to the diligent and unselfish work of our partners of the Apostolic Religious Community \"UCHVE EVANGELIST\" distributed food kits to IDPs, the poor and the disabled in the village of Niva Trudova, Kryvorizka District."
  },
  {
    "keyi18n": "The purpose of the project",
    "value": "The purpose of the project:"
  },
  {
    "keyi18n": "Target population",
    "value": "Target population:"
  },
  {
    "keyi18n": "Subject of distribution",
    "value": "Subject of distribution:"
  },
  {
    "keyi18n": "Project implementation period",
    "value": "Project implementation period"
  },
  {
    "keyi18n": "International donor of the project",
    "value": "International donor of the project:"
  },
  {
    "keyi18n": "Population centers in which the project is implemented",
    "value": "Population centers in which the project is implemented:"
  },
  {
    "keyi18n": "The number of households to whom it is planned to provide humanitarian aid",
    "value": "The number of households to whom it is planned to provide humanitarian aid:"
  },
  {
    "keyi18n": "The number of people who are planned to be provided with food and non-food aid",
    "value": "The number of people who are planned to be provided with food and non-food aid:"
  },
  {
    "keyi18n": "Partners for project implementation",
    "value": "Partners for project implementation:"
  },
  {
    "keyi18n": "name title proj1",
    "value": "\"HUMANITARIAN ASSISTANCE TO KHARKIV\" PROJECT"
  },
  {
    "keyi18n": "goal proj1",
    "value": "to support the residents of the city of Kharkiv and the Kharkiv region with food, hygiene products, lanterns, water filters, clothes and other essential things in the conditions of a humanitarian crisis."
  },
  {
    "keyi18n": "target proj1",
    "value": "Internally displaced persons, disabled people, low-income families with many children living in the city of Kharkiv and residents of de-occupied districts of the Kharkiv region living under shelling, without electricity, water and gas supply in tough humanitarian conditions."
  },
  {
    "keyi18n": "subject proj1",
    "value": "As part of this project, distribution of the following products and things:"
  },
  {
    "keyi18n": "subject1 proj1",
    "value": "Product sets – 1 per household;"
  },
  {
    "keyi18n": "subject1 1 proj1",
    "value": "Macaroni"
  },
  {
    "keyi18n": "subject1 2 proj1",
    "value": "Barley groats"
  },
  {
    "keyi18n": "subject1 3 proj1",
    "value": "Wheat groats"
  },
  {
    "keyi18n": "subject1 4 proj1",
    "value": "Corn groats"
  },
  {
    "keyi18n": "subject1 5 proj1",
    "value": "Fig"
  },
  {
    "keyi18n": "subject1 6 proj1",
    "value": "Oat flakes"
  },
  {
    "keyi18n": "subject1 7 proj1",
    "value": "Oil"
  },
  {
    "keyi18n": "subject1 8 proj1",
    "value": "Canned meat"
  },
  {
    "keyi18n": "subject1 9 proj1",
    "value": "Canned beans"
  },
  {
    "keyi18n": "subject1 10 proj1",
    "value": "Salt"
  },
  {
    "keyi18n": "subject1 11 proj1",
    "value": "Baby food"
  },
  {
    "keyi18n": "subject1 12 proj1",
    "value": "Hygiene products: diapers for children (sizes from 0 to 6), diapers for adults, wet wipes, antiseptics, feminine pads;"
  },
  {
    "keyi18n": "subject1 13 proj1",
    "value": "Lights, power banks"
  },
  {
    "keyi18n": "subject1 14 proj1",
    "value": "Filters and canisters for water"
  },
  {
    "keyi18n": "subject1 15 proj1",
    "value": "Karymata"
  },
  {
    "keyi18n": "subject1 16 proj1",
    "value": "Clothes"
  },
  {
    "keyi18n": "subject1 17 proj1",
    "value": "Footwear"
  },
  {
    "keyi18n": "subject1 18 proj1",
    "value": "Dishes"
  },
  {
    "keyi18n": "time proj1",
    "value": "from April 2022 until the stabilization of the humanitarian situation in this region of Ukraine."
  },
  {
    "keyi18n": "cities proj1",
    "value": "The city of Kharkiv"
  },
  {
    "keyi18n": "cities1 proj1",
    "value": "Villages and cities of the Kharkiv region: Dergachi, Bezruky, Prudyanka, Solonytsivka, Kozacha Lopan, Tsirkuny, Cherkasska Lozova, Ruska Lozova, Cherkasski Tyshki, Russki Tyshki, Lyptsi, Kupyansk, Dvorichne, Shevchenkove, Chuguyiv, Balakliya, Izyum, Zmiiv, Merefa , Pisochyn, Lyubotyn and others."
  },
  {
    "keyi18n": "number house proj1",
    "value": "about 40 000"
  },
  {
    "keyi18n": "number people proj1",
    "value": "about  100 000 people"
  },
  {
    "keyi18n": "name title proj3",
    "value": "PROJECT «WARM DNIPRO - KHERSON»"
  },
  {
    "keyi18n": "goal proj3",
    "value": "to prepare 500 households in Dnipro (200 households) and Kherson (300 households) regions for winter by providing them with a wood-burning stove and enough firewood to heat one room in their house."
  },
  {
    "keyi18n": "target proj3",
    "value": "these are households in Dnipro and Kherson regions that fall under one of the following vulnerable criteria: people with disabilities or injuries, people with chronic diseases or severe medical conditions, older people (60+), women and children in the risk category: single heads households, and/or women who are the primary family caregivers, boys and girls, unaccompanied children, pregnant or lactating women, and additional vulnerable women and children without a support system. Households the structure of a house that was destroyed or damaged as a result of the ongoing war in Ukraine."
  },
  {
    "keyi18n": "subject proj3",
    "value": "As part of this project, distribution of the following products and things:"
  },
  {
    "keyi18n": "subject1 proj3",
    "value": "Subject and quantity"
  },
  {
    "keyi18n": "subject1 1 proj3",
    "value": "Wood stove"
  },
  {
    "keyi18n": "subject1 2 proj3",
    "value": "Stove pipe 1 m"
  },
  {
    "keyi18n": "subject1 3 proj3",
    "value": "Elbow 90 degrees for connecting the stove and the pipe"
  },
  {
    "keyi18n": "subject1 4 proj3",
    "value": "4 m³ of firewood (must be hardwood) or combustible fuel"
  },
  {
    "keyi18n": "subject1 11 proj3",
    "value": "Wood-burning stoves - will be distributed to 500 households in rural areas."
  },
  {
    "keyi18n": "subject1 12 proj3",
    "value": "Firewood – 4 metric cubic meters of hardwood firewood to be distributed to all 500 rural households along with a wood stove. If hardwood is not available, alternative fuel may be provided in the following quantities: 1. Briquettes - 2.25 MT; 2. Pellets - 3 MT; 3. Coal - 2 MT"
  },
  {
    "keyi18n": "time proj3",
    "value": "15.01.23 – 01.03.23"
  },
  {
    "keyi18n": "cities proj3",
    "value": "The village of Chervonogrigorivka of the Chervonogrigorivka community of the Nikopol district of the Dnipro region."
  },
  {
    "keyi18n": "cities 1 proj3",
    "value": "Prydniprovske village of Chervonogrigorivska community of Nikopol district of Dnipro region."
  },
  {
    "keyi18n": "cities 2 proj3",
    "value": "The city of Berislav, Berislav district, Kherson region."
  },
  {
    "keyi18n": "cities 3 proj3",
    "value": "Village of Novoberislav of Berislav district of Kherson region."
  },
  {
    "keyi18n": "cities 4 proj3",
    "value": "Village of Taras Shevchenko, Berislav District, Kherson Region."
  },
  {
    "keyi18n": "cities 5 proj3",
    "value": "Pershotravneve village of Berislav district, Kherson region."
  },
  {
    "keyi18n": "cities 6 proj3",
    "value": "Urozhayne village of Beryslav district of Kherson region."
  },
  {
    "keyi18n": "cities 7 proj3",
    "value": "The village of Shlyakhove, Beryslav district, Kherson region."
  },
  {
    "keyi18n": "cities 8 proj3",
    "value": "Zmiyivka village of Beryslav district, Kherson region."
  },
  {
    "keyi18n": "cities 9 proj3",
    "value": "Rakivka village of Beryslav district of Kherson region."
  },
  {
    "keyi18n": "cities 10 proj3",
    "value": "Village Tomarine, Beryslav district, Kherson region."
  },
  {
    "keyi18n": "number house proj3",
    "value": "500"
  },
  {
    "keyi18n": "number people proj3",
    "value": "1500 "
  },
  {
    "keyi18n": "name title proj4",
    "value": "PROJECT \"HUMANITARIAN AID MYKOLAIV-ODESCHINA\""
  },
  {
    "keyi18n": "goal proj4",
    "value": "to support the residents of the front-line city of Mykolaiv and IDPs living in the towns and villages of the Oleska region with food products, hygiene products, lanterns, water filters and other essential things in the conditions of the humanitarian crisis."
  },
  {
    "keyi18n": "target proj4",
    "value": "internally displaced persons, disabled people, low-income families with many children living in the front-line city of Mykolaiv, and IDPs living and evacuated to towns and villages of the Odesa region."
  },
  {
    "keyi18n": "time proj4",
    "value": "from August 2022 until the stabilization of the humanitarian situation in this region of Ukraine"
  },
  {
    "keyi18n": "cities proj4",
    "value": "The city of Mykolaiv"
  },
  {
    "keyi18n": "cities1 proj4",
    "value": "Cities and villages of Bilhorod-Dnistrovskyi district of Odesa region: Bilhorod-Dnistrovskyi, Shabo, Serhiyivka"
  },
  {
    "keyi18n": "number house proj4",
    "value": "about 5 000"
  },
  {
    "keyi18n": "number people proj4",
    "value": "about 10 000 people"
  },
  {
    "keyi18n": "name title proj2",
    "value": "HUMANITARIAN AID OF THE Dnipro REGION"
  },
  {
    "keyi18n": "goal proj2",
    "value": "to support the residents of the frontline towns and villages of the Dnipro region with food, hygiene products, lanterns, water filters and other essential things in the humanitarian crisis conditions."
  },
  {
    "keyi18n": "target proj2",
    "value": "internally displaced persons, disabled people, and low-income families with many children living in the front-line cities and villages of the Dnipro region."
  },
  {
    "keyi18n": "time proj2",
    "value": "from March 2022 until the stabilization of the humanitarian situation in this region of Ukraine."
  },
  {
    "keyi18n": "cities proj2",
    "value": "Cities and villages of the Kryvorizka district of the Dnipro region: Kryvyi Rih, Apostolove, Zelenodolsk, Ukrainka, Volodymyrivka, Hrushivka, Maryanske, Pershe Travnya, Niva Trudova, Kamyanka, Zhovte, Chervyn Tik, Sich, Tokivske, Mykhailivka, Shesternya, etc."
  },
  {
    "keyi18n": "cities1 proj2",
    "value": "Cities and villages of the Nikopol district of the Dnipro region: Nikopol, Marganets, Pokrov, Pershotravneve, Myrovo, Tomakivka, Chervonogrigorivka, Prydniprovske, Chkalov, Pokrovske and others."
  },
  {
    "keyi18n": "number house proj2",
    "value": "about 100 000"
  },
  {
    "keyi18n": "number people proj2",
    "value": "about 200 000 people"
  },
  {
    "keyi18n": "name title proj5",
    "value": "PROJECT \"HUMANITARIAN AID TO KHERSON REGION\""
  },
  {
    "keyi18n": "goal proj5",
    "value": "to support residents of de-occupied and front-line cities and villages of the Kherson region with food products, hygiene products, lanterns, water filters and other important things in the conditions of a humanitarian crisis."
  },
  {
    "keyi18n": "target proj5",
    "value": "all categories of the population living in front-line and de-occupied cities and villages of the Kherson region."
  },
  {
    "keyi18n": "time proj5",
    "value": "from June 2022 until the stabilization of the humanitarian situation in this region of Ukraine."
  },
  {
    "keyi18n": "cities1 proj5",
    "value": "Cities and villages of the Beryslav district of the Kherson region: Beryslav, Novovorontsovka, Vysokopilya, Osokorivka, Khryshchenivka, Novovoskresenske, Dobryanka, Lyubimivka, Knyazunka, Olghine, Potemkine, Arkhangelsk, Myrolyubivka, Trudolyubivka, Zolota Balka, Mykhailivka, Stepove, Dar'ivka and others."
  },
  {
    "keyi18n": "number house proj5",
    "value": "about 10 000."
  },
  {
    "keyi18n": "number people proj5",
    "value": "about 20 000 people."
  },
  {
    "keyi18n": "name title proj6",
    "value": "PROJECT \"SUPPORT OF FRONTLINE HOSPITALS\""
  },
  {
    "keyi18n": "goal proj6",
    "value": "to support hospitals and clinics located in the frontline regions of our country with medicines, food products, hygiene products, linens, mattresses, wheelchairs and other medical equipment."
  },
  {
    "keyi18n": "target proj6 1",
    "value": "KP \"APOSTOLYVSKY CITY HOSPITAL\" OF THE APOSTOLYVSKY CITY COUNCIL\" in the city of Apostolov, Kryvorizka district, Dnipro region;"
  },
  {
    "keyi18n": "target proj6 2",
    "value": "GULYAYPIL DISTRICT CENTER OF PRIMARY MEDICAL AND SANITARY AID in the town of Gulyaypole, Pologiv District, Zaporizhzhia Region;"
  },
  {
    "keyi18n": "target proj6 3",
    "value": "Communal non-commercial enterprise \"City Clinical Hospital No. 2 named after Prof. O.O. Shalimov\" of the Kharkiv City Council"
  },
  {
    "keyi18n": "target proj6 4",
    "value": "State institution \"National Institute of Therapy named after L. T. Maloy of the National Academy of Medical Sciences of Ukraine\""
  },
  {
    "keyi18n": "target proj6 5",
    "value": "KNP HOR \"REGIONAL CHILDREN'S CLINICAL HOSPITAL #1.\""
  },
  {
    "keyi18n": "subject1 1 proj6",
    "value": "Various medications and medicinal products;"
  },
  {
    "keyi18n": "subject1 2 proj6",
    "value": "Wheelchairs, policemen, stretchers and others"
  },
  {
    "keyi18n": "subject1 3 proj6",
    "value": "Generators"
  },
  {
    "keyi18n": "subject1 4 proj6",
    "value": "Baby food"
  },
  {
    "keyi18n": "subject1 5 proj6",
    "value": "Food products"
  },
  {
    "keyi18n": "time proj6",
    "value": "from April 2022 until the stabilization of the humanitarian situation in these regions of Ukraine"
  },
  {
    "keyi18n": "cities proj6",
    "value": "City of Kharkiv"
  },
  {
    "keyi18n": "cities1 proj6",
    "value": "City of Apostolove, Kryvorizka District, Dnipro Region"
  },
  {
    "keyi18n": "cities2 proj6",
    "value": "City of Gulyaipole, Pologiv District, Zaporizhzhia Region"
  },
  {
    "keyi18n": "name title proj7",
    "value": "PROJECT \"ASSISTANCE OF THE ARMY\""
  },
  {
    "keyi18n": "goal proj7",
    "value": "to support the Armed Forces of Ukraine, the National Guard and other military formations that defend the territorial integrity and sovereignty of Ukraine with food, hygiene products, lanterns, water filters, equipment and other important things."
  },
  {
    "keyi18n": "subject1 1 proj7",
    "value": "Equipment"
  },
  {
    "keyi18n": "subject1 2 proj7",
    "value": "Means of protection"
  },
  {
    "keyi18n": "subject1 3 proj7",
    "value": "Means of communication"
  },
  {
    "keyi18n": "subject1 4 proj7",
    "value": "Means of heating"
  },
  {
    "keyi18n": "subject1 5 proj7",
    "value": "Food products"
  },
  {
    "keyi18n": "subject1 6 proj7",
    "value": "Hygiene products"
  },
  {
    "keyi18n": "time proj7",
    "value": "from April 2022 until the complete VICTORY of Ukraine."
  },
  {
    "keyi18n": "proj7 regions title",
    "value": "Directions of the location of military formations in which the project is implemented: "
  },
  {
    "keyi18n": "proj7 regions 1",
    "value": "Siversky region"
  },
  {
    "keyi18n": "proj7 regions 2",
    "value": "Kharkivskyi region"
  },
  {
    "keyi18n": "proj7 regions 3",
    "value": "Kupyansky region"
  },
  {
    "keyi18n": "proj7 regions 4",
    "value": "Bakhmutsky region"
  },
  {
    "keyi18n": "proj7 regions 5",
    "value": "South region"
  },
  {
    "keyi18n": "name title proj8",
    "value": "HUMANITARIAN PROJECT FOR THE RESIDENTS OF KHERSON REGION EVACUATED TO KRYVI RIG"
  },
  {
    "keyi18n": "goal proj8",
    "value": "to provide food and hygiene products to residents evacuated to the city of Kryvyi Rih from the de-occupied settlements of the Berislav district of the Kherson region."
  },
  {
    "keyi18n": "target proj8",
    "value": "all categories of the population that were evacuated from the Kherson region to the city of Kryvyi Rih."
  },
  {
    "keyi18n": "time proj8",
    "value": "from December 1, 2022 until the stabilization of the humanitarian situation in this region of Ukraine."
  },
  {
    "keyi18n": "proj8 regions 1",
    "value": "The city of Kryvyi Rih, Dnipro region."
  },
  {
    "keyi18n": "number people proj8",
    "value": "about 1000 people every month."
  },

   {
    "keyi18n": "name title proj 1",
    "value": "\"HUMANITARIAN ASSISTANCE TO KHARKIV\" PROJECT"
  },
    {
    "keyi18n": "goal proj 1",
    "value": "to support the residents of the city of Kharkiv and the Kharkiv region with food, hygiene products, lanterns, water filters, clothes and other essential things in the conditions of a humanitarian crisis."
  },
    {
    "keyi18n": "target proj 1",
    "value": "Internally displaced persons, disabled people, low-income families with many children living in the city of Kharkiv and residents of de-occupied districts of the Kharkiv region living under shelling, without electricity, water and gas supply in tough humanitarian conditions."
  },
    {
    "keyi18n": "time proj 1",
    "value": "from April 2022 until the stabilization of the humanitarian situation in this region of Ukraine."
  },
    {
    "keyi18n": "donor proj 1",
    "value": "- CHARITY ORGANIZATION 'SAMARITAN'S PURSE UKRAINE' CHARITY FUND\n- CHARITY ORGANIZATION 'CHARITY FUND EMAUS UKRAINE'"
  },
     {
    "keyi18n": "locations proj 1",
    "value": "- The city of Kharkiv\n- Villages and cities of the Kharkiv region: Dergachi, Bezruky, Prudyanka, Solonytsivka, Kozacha Lopan, Tsirkuny, Cherkasska Lozova, Ruska Lozova, Cherkasski Tyshki, Russki Tyshki, Lyptsi, Kupyansk, Dvorichne, Shevchenkove, Chuguyiv, Balakliya, Izyum, Zmiiv, Merefa , Pisochyn, Lyubotyn and others."
  },
     {
    "keyi18n": "households proj 1",
    "value": "about 40 000"
  },
     {
    "keyi18n": "people proj 1",
    "value": "about 100 000 people"
  },
     {
    "keyi18n": "partners proj 1",
    "value": "- CHARITY FUND CO \"EUROPEAN TRADITIONS OF CHARITY\"\n- CHARITY ORGANIZATION \"CHARITY FUND OUR HEART-UKRAINE\"\n- PUBLIC ORGANIZATION \"KHARKIV SYCH\"\n- PUBLIC ORGANIZATION \"CYCLING VOLUNTEERS OF KHARKOV\""
  },
    {
    "keyi18n": "subject 1",
    "value": "- Product sets – 1 per household;:\n  1. Macaroni\n  2. Barley groats\n  3. Wheat groats\n  4. Corn groats\n  5. Fig\n  6. Oat flakes\n  7. Oil\n  8. Canned meat\n  9. Canned beans\n  10. Salt\n- Hygiene products: diapers for children (sizes from 0 to 6), diapers for adults, wet wipes, antiseptics, feminine pads;\n- Lights, power banks\n- Filters and canisters for water\n- Karymata\n- Clothes\n- Footwear\n- Dishes"
  },

  


   {
    "keyi18n": "name title proj 2",
    "value": "PROJECT \"SUPPORT OF FRONTLINE HOSPITALS\""
  },
    {
    "keyi18n": "goal proj 2",
    "value": "to support hospitals and clinics located in the frontline regions of our country with medicines, food products, hygiene products, linens, mattresses, wheelchairs and other medical equipment."
  },
    {
    "keyi18n": "target proj 2",
     "value": "- KP \"APOSTOLYVSKY CITY HOSPITAL\" OF THE APOSTOLYVSKY CITY COUNCIL\" in the city of Apostolov, Kryvorizka district, Dnipro region;\n- GULYAYPIL DISTRICT CENTER OF PRIMARY MEDICAL AND SANITARY AID in the town of Gulyaypole, Pologiv District, Zaporizhzhia Region;\n- Communal non-commercial enterprise \"City Clinical Hospital No. 2 named after Prof. O.O. Shalimov\" of the Kharkiv City Council\n- State institution \"National Institute of Therapy named after L. T. Maloy of the National Academy of Medical Sciences of Ukraine\"\n- KNP HOR \"REGIONAL CHILDREN'S CLINICAL HOSPITAL #1.\""
  },
    {
    "keyi18n": "time proj 2",
    "value": "from April 2022 until the stabilization of the humanitarian situation in these regions of Ukraine"
  },
    {
    "keyi18n": "donor proj 2",
    "value": ""
  },
     {
    "keyi18n": "locations proj 2",
    "value": ""
  },
     {
    "keyi18n": "households proj 2",
    "value": ""
  },
     {
    "keyi18n": "people proj 2",
    "value": ""
  },
     {
    "keyi18n": "partners  proj 2",
    "value": ""
  },
    {
    "keyi18n": "subject 2",
    "value": "- City of Kharkiv\n- City of Apostolove, Kryvorizka District, Dnipro Region\n- City of Gulyaipole, Pologiv District, Zaporizhzhia Region"
  },

  {
  "keyi18n": "name title proj 3",
  "value": "PROJECT \"ASSISTANCE OF THE ARMY\""
},
{
  "keyi18n": "goal proj 3",
  "value": "to support the Armed Forces of Ukraine, the National Guard and other military formations that defend the territorial integrity and sovereignty of Ukraine with food, hygiene products, lanterns, water filters, equipment and other important things."
},
{
  "keyi18n": "target proj 3",
  "value": ""
},
{
  "keyi18n": "time proj 3",
  "value": "from April 2022 until the complete VICTORY of Ukraine."
},
{
  "keyi18n": "donor proj 3",
  "value": ""
},
{
  "keyi18n": "locations proj 3",
  "value": "- Siversky region\n- Kharkivskyi region\n- Kupyansky region\n- Bakhmutsky region\n- South region"
},
{
  "keyi18n": "households proj 3",
  "value": ""
},
{
  "keyi18n": "people proj 3",
  "value": ""
},
{
  "keyi18n": "partners proj 3",
  "value": ""
},
{
  "keyi18n": "subject 3",
 "value": "- Equipment\n- Means of protection\n- Means of communication\n- Means of heating\n- Food products\n- Hygiene products\n- Lights, power banks\n- Filters and canisters for water\n- Karymata\n- Clothes\n- Footwear\n- Dishes"
},



{
  "keyi18n": "name title proj 4",
  "value": "HUMANITARIAN AID OF THE Dnipro REGION"
},
{
  "keyi18n": "goal proj 4",
  "value": "to support the residents of the frontline towns and villages of the Dnipro region with food, hygiene products, lanterns, water filters and other essential things in the humanitarian crisis conditions."
},
{
  "keyi18n": "target proj 4",
  "value": "internally displaced persons, disabled people, and low-income families with many children living in the front-line cities and villages of the Dnipro region."
},
{
  "keyi18n": "time proj 4",
  "value": "from March 2022 until the stabilization of the humanitarian situation in this region of Ukraine."
},
{
  "keyi18n": "donor proj 4",
   "value": "- CHARITY ORGANIZATION \"SAMARITAN'S PURSE UKRAINE\" CHARITY FUND\n- CHARITY ORGANIZATION \"CHARITY FUND EMAUS UKRAINE\""
},
{
  "keyi18n": "locations proj 4",
  "value": "- Cities and villages of the Kryvorizka district of the Dnipro region: Kryvyi Rih, Apostolove, Zelenodolsk, Ukrainka, Volodymyrivka, Hrushivka, Maryanske, Pershe Travnya, Niva Trudova, Kamyanka, Zhovte, Chervyn Tik, Sich, Tokivske, Mykhailivka, Shesternya, etc.\n- Cities and villages of the Nikopol district of the Dnipro region: Nikopol, Marganets, Pokrov, Pershotravneve, Myrovo, Tomakivka, Chervonogrigorivka, Prydniprovske, Chkalov, Pokrovske and others."
},
{
  "keyi18n": "households proj 4",
  "value": "about 100 000"
},
{
  "keyi18n": "people proj 4",
  "value": "about 200 000 people"
},
{
  "keyi18n": "partners proj 4",
 "value": "- CHARITY FUND CO \"EUROPEAN TRADITIONS OF CHARITY\"\n- CHARITY ORGANIZATION \"CHARITY FUND OUR HEART-UKRAINE\"\n- PUBLIC ORGANIZATION \"KHARKIV SYCH\"\n- PUBLIC ORGANIZATION \"CYCLING VOLUNTEERS OF KHARKOV\""
},
{
  "keyi18n": "subject 4",
   "value": "- Product sets – 1 per household;:\n  1. Macaroni\n  2. Barley groats\n  3. Wheat groats\n  4. Corn groats\n  5. Fig\n  6. Oat flakes\n  7. Oil\n  8. Canned meat\n  9. Canned beans\n  10. Salt\n- Hygiene products: diapers for children (sizes from 0 to 6), diapers for adults, wet wipes, antiseptics, feminine pads;\n- Lights, power banks\n- Filters and canisters for water\n- Karymata\n- Clothes\n- Footwear\n- Dishes"
  },


{
  "keyi18n": "name title proj 5",
  "value": "HUMANITARIAN PROJECT FOR THE RESIDENTS OF KHERSON REGION EVACUATED TO KRYVI RIG"
},
{
  "keyi18n": "goal proj 5",
  "value": "to provide food and hygiene products to residents evacuated to the city of Kryvyi Rih from the de-occupied settlements of the Berislav district of the Kherson region."
},
{
  "keyi18n": "target proj 5",
  "value": "all categories of the population that were evacuated from the Kherson region to the city of Kryvyi Rih."
},
{
  "keyi18n": "time proj 5",
  "value": "from December 1, 2022 until the stabilization of the humanitarian situation in this region of Ukraine."
},
{
  "keyi18n": "donor proj 5",
  "value": ""
},
{
  "keyi18n": "locations proj 5",
  "value": "The city of Kryvyi Rih, Dnipro region."
},
{
  "keyi18n": "households proj 5",
  "value": ""
},
{
  "keyi18n": "people proj 5",
  "value": ""
},
{
  "keyi18n": "partners proj 5",
  "value": "- CHARITY ORGANIZATION \"SAMARITAN'S PURSE UKRAINE\" CHARITY FUND"
},
{
  "keyi18n": "subject 5",
  "value": "- Product sets – 1 per household;:\n  1. Macaroni\n  2. Barley groats\n  3. Wheat groats\n  4. Corn groats\n  5. Fig\n  6. Oat flakes\n  7. Oil\n  8. Canned meat\n  9. Canned beans\n  10. Salt\n- Hygiene products"
},


{
  "keyi18n": "name title proj 6",
  "value": "PROJECT \"HUMANITARIAN AID MYKOLAIV-ODESCHINA\""
},
{
  "keyi18n": "goal proj 6",
  "value": "to support the residents of the front-line city of Mykolaiv and IDPs living in the towns and villages of the Oleska region with food products, hygiene products, lanterns, water filters and other essential things in the conditions of the humanitarian crisis."
},
{
  "keyi18n": "target proj 6",
  "value": "internally displaced persons, disabled people, low-income families with many children living in the front-line city of Mykolaiv, and IDPs living and evacuated to towns and villages of the Odesa region."
},
{
  "keyi18n": "time proj 6",
  "value": "from August 2022 until the stabilization of the humanitarian situation in this region of Ukraine"
},
{
  "keyi18n": "donor proj 6",
   "value": "- CHARITY ORGANIZATION \"SAMARITAN'S PURSE UKRAINE\" CHARITY FUND\n- CHARITY ORGANIZATION \"CHARITY FUND EMAUS UKRAINE\""
},
{
  "keyi18n": "locations proj 6",
  "value": "- The city of Mykolaiv\n- Cities and villages of Bilhorod-Dnistrovskyi district of Odesa region: Bilhorod-Dnistrovskyi, Shabo, Serhiyivka"
},
{
  "keyi18n": "households proj 6",
  "value": "about 5 000"
},
{
  "keyi18n": "people proj 6",
  "value": "about 10 000 people"
},
{
  "keyi18n": "partners proj 6",
  "value": "- CHARITY FUND CO \"EUROPEAN TRADITIONS OF CHARITY\"\n- CHARITY ORGANIZATION \"CHARITY FUND OUR HEART-UKRAINE\"\n- PUBLIC ORGANIZATION \"KHARKIV SYCH\"\n- PUBLIC ORGANIZATION \"CYCLING VOLUNTEERS OF KHARKOV\""
},
{
  "keyi18n": "subject 6",
  "value": "- Product sets – 1 per household;:\n  1. Macaroni\n  2. Barley groats\n  3. Wheat groats\n  4. Corn groats\n  5. Fig\n  6. Oat flakes\n  7. Oil\n  8. Canned meat\n  9. Canned beans\n  10. Salt\n- Hygiene products: diapers for children (sizes from 0 to 6), diapers for adults, wet wipes, antiseptics, feminine pads;\n- Lights, power banks\n- Filters and canisters for water\n- Karymata\n- Clothes\n- Footwear\n- Dishes"
  },


{
  "keyi18n": "name title proj 7",
  "value": "PROJECT \"HUMANITARIAN AID TO KHERSON REGION\""
},
{
  "keyi18n": "goal proj 7",
  "value": "to support residents of de-occupied and front-line cities and villages of the Kherson region with food products, hygiene products, lanterns, water filters and other important things in the conditions of a humanitarian crisis."
},
{
  "keyi18n": "target proj 7",
  "value": "all categories of the population living in front-line and de-occupied cities and villages of the Kherson region."
},
{
  "keyi18n": "time proj 7",
  "value": "from June 2022 until the stabilization of the humanitarian situation in this region of Ukraine."
},
{
  "keyi18n": "donor proj 7",
 "value": "- CHARITY ORGANIZATION \"SAMARITAN'S PURSE UKRAINE\" CHARITY FUND\n- CHARITY ORGANIZATION \"CHARITY FUND EMAUS UKRAINE\""
},
{
  "keyi18n": "locations proj 7",
  "value": "- Cities and villages of the Beryslav district of the Kherson region: Beryslav, Novovorontsovka, Vysokopilya, Osokorivka, Khryshchenivka, Novovoskresenske, Dobryanka, Lyubimivka, Knyazunka, Olghine, Potemkine, Arkhangelsk, Myrolyubivka, Trudolyubivka, Zolota Balka, Mykhailivka, Stepove, Dar'ivka and others."
},
{
  "keyi18n": "households proj 7",
  "value": "about 10 000."
},
{
  "keyi18n": "people title 7",
  "value": "about 20 000 people."
},
{
  "keyi18n": "partners proj 7",
 "value": "- PUBLIC ORGANIZATION \"IRON ANGELS\"\n- UKRAINIAN CHURCH OF CHRISTIANS OF THE EVANGELICAL FAITH"
},
{
  "keyi18n": "subject 7",
   "value": "- Product sets – 1 per household;:\n  1. Macaroni\n  2. Barley groats\n  3. Wheat groats\n  4. Corn groats\n  5. Fig\n  6. Oat flakes\n  7. Oil\n  8. Canned meat\n  9. Canned beans\n  10. Salt\n- Hygiene products: diapers for children (sizes from 0 to 6), diapers for adults, wet wipes, antiseptics, feminine pads;\n- Lights, power banks\n- Filters and canisters for water\n- Karymata\n- Clothes\n- Footwear\n- Dishes"
  },
    {
    keyi18n: "Sort by date",
    value: "Sort by date",
  },
  {
    keyi18n: "Reset btn",
    value: "Reset",
  },

], {});
  
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('en', null, {})
  }
};
