

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert('Users', [{
        name: 'John Doe',
        email: 'husdgfise@yandex.ru',
        password: "123",
      }], {});

      await queryInterface.bulkInsert('Tracks', [{
        city: 'Msk',
        title: 'BUTOVO',
        start: "Москва",
        finish: 'Воронеж',
        user_id: 1
      }], {});

      await queryInterface.bulkInsert('Comments', [{
        text: 'Хороший маршрут',
        user_id: 1,
        track_id: 1,
      }], {});

      
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Users', null, {});
      await queryInterface.bulkDelete('Tracks', null, {});
      await queryInterface.bulkDelete('Comments', null, {});
  }
};
