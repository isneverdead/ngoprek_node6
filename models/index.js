const sequelize = require("../models/db.js");
const Sequelize = require('sequelize');
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.barangModel = require("./barang.model.js")(sequelize, Sequelize);
module.exports = db;