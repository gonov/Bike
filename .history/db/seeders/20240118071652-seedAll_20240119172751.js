const bcrypt = require('bcrypt')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert('Users', [{
        img: 'https://www.politico.eu/wp-content/uploads/2022/03/04/GettyImages-1002617260.jpg',
        name: 'Владимир Путин',
        email: 'putin@yandex.ru',
        password: await bcrypt.hash('123', 10)
      }], {});

      await queryInterface.bulkInsert('Users', [{
        name: 'Татьяна Антонова',
        email: 'tanuska65@gmail.com',
        password: await bcrypt.hash('teytyuwyy', 10)
      }], {});

      await queryInterface.bulkInsert('Users', [{
        name: 'Сергей Кудряшов',
        email: 'kudSergeo@ymail.ru',
        password: await bcrypt.hash('12345', 10)
      }], {});

      await queryInterface.bulkInsert('Tracks', [{
        img:  "/img/moscow.jpeg",
        city: 'Москва',
        title: 'Moscow ride',
        start: "ул. Лужники, 24с11, Москва",
        finish: 'пр-т Мира, 119, Москва',
        user_id: 1
      }], {});

      await queryInterface.bulkInsert('Tracks', [{
        img: "/img/lisboa.jpeg",
        city: 'Lisbon',
        title: 'Portuguese route',
        start: "Lisbon",
        finish: 'Sintra',
        user_id: 1
      }], {});

      await queryInterface.bulkInsert('Tracks', [{
        img: "/img/milan.jpeg",
        city: 'Milan',
        title: 'Italian bike ride',
        start: "P.za del Duomo",
        finish: 'Via Brigata Liguria, 9',
        user_id: 1
      }], {});

      await queryInterface.bulkInsert('Tracks', [{
        img: "/img/Zelenogradsk.jpg",
        city: 'Калининград',
        title: 'К морю',
        start: "Калининград, Кафедральный собор",
        finish: 'Зеленоградск',
        user_id: 2
      }], {});

      await queryInterface.bulkInsert('Tracks', [{
        img: "/img/Sokolniki.jpeg",
        city: 'Москва',
        title: 'Велопрогулка в Сокольниках',
        start: "ул. Сокольнический Вал, 1",
        finish: '5-й Лучевой просек, 16А, Москва',
        user_id: 2
      }], {});

      await queryInterface.bulkInsert('Tracks', [{
        img: "/img/helsinki.jpeg",
        city: 'Хельсинки',
        title: 'Хельсинки-Эспоо',
        start: "Bulevardi 40, 00120 Helsinki, Финляндия",
        finish: 'Espoontie 21, 02740 Espoo, Финляндия',
        user_id: 3

      }], {});await queryInterface.bulkInsert('Tracks', [{
        img: "/img/vyborg.jpeg",
        city: 'Санкт-Петербург',
        title: 'Питер-Выборг',
        start: "наб. Лебяжьей канавки, 3, Санкт-Петербург",
        finish: 'ул. Ушакова, 4, Выборг, Ленинградская обл.',
        user_id: 3

      }], {});await queryInterface.bulkInsert('Tracks', [{
        img: "/img/krakov.jpeg",
        city: 'Варшава',
        title: 'Варшава-Краков',
        start: "Stanisława Kostki Potockiego 10/16, 02-958 Warszawa, Польша",
        finish: 'Zamek Wawel 5, 31-001 Kraków, Польша',
        user_id: 3
      }], {});

      await queryInterface.bulkInsert('Tracks', [{
        img: "/img/krakov.jpeg",
        city: 'Москва',
        title: 'Москва',
        start: "Stanisława Kostki Potockiego 10/16, 02-958 Warszawa, Польша",
        finish: 'Zamek Wawel 5, 31-001 Kraków, Польша',
        user_id: 3
      }], {});



      await queryInterface.bulkInsert('Comments', [{
        text: 'Хороший маршрут',
        user_id: 1,
        track_id: 1,
      }], {});

      await queryInterface.bulkInsert('Comments', [{
        text: 'Подойдет для семей с детьми или пенсионеров',
        user_id: 1,
        track_id: 5,
      }], {});

      await queryInterface.bulkInsert('Comments', [{
        text: 'Не сложный. По пути можно заточить пиццу',
        user_id: 3,
        track_id: 3,
      }], {});

      await queryInterface.bulkInsert('Comments', [{
        text: 'Красивые виды',
        user_id: 1,
        track_id: 4,
      }], {});
      await queryInterface.bulkInsert('Comments', [{
        text: 'Нужна хорошая физическая подготовка. Паштельки и портвейн норм.',
        user_id: 3,
        track_id: 2,
      }], {});
      await queryInterface.bulkInsert('Comments', [{
        text: 'соскучилась по икее. спасибо за маршрут)',
        user_id: 2,
        track_id: 6,
      }], {});

      await queryInterface.bulkInsert('Comments', [{
        text: 'Хороший маршрут',
        user_id: 2,
        track_id: 7,
      }], {});

      await queryInterface.bulkInsert('Comments', [{
        text: 'Красивый маршрут через исторический центр',
        user_id: 1,
        track_id: 8,
      }], {});
      await queryInterface.bulkInsert('Comments', [{
        text: 'Nice',
        user_id: 3,
        track_id: 1,
      }], {});


      
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Users', null, {});
      await queryInterface.bulkDelete('Tracks', null, {});
      await queryInterface.bulkDelete('Comments', null, {});
  }
};