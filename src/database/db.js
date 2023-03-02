const Sequelize = require('sequelize');
require('dotenv/config');
console.log(process.env)
const sequelize = new Sequelize(
    process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,
    {
    dialect: 'mysql',
    host:  process.env.DB_HOST,
    port: 3306
  })
 
module.exports = sequelize;