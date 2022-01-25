const mysql = require("mysql2");
const Sequelize = require('sequelize');

// require('dotenv').config()
//Sequelize connection
var connection = new Sequelize('ngoprek_node4', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
  });
  module.exports = connection; 