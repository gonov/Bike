

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
      }], {});

      
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Users', null, {});
      await queryInterface.bulkDelete('Tracks', null, {});
  }
};
