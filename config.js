// config.js
const { Sequelize } = require('sequelize');

module.exports = new Sequelize({
  dialect: 'mariadb',
  host: '127.0.0.1',
  username: 'root',
  password: '33241858',
  database: 'plantour_db',
});
