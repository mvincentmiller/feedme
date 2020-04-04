const path = require('path');
const Sequelize = require('sequelize');
// this will load .env parameters to process.env
const env = require('dotenv').config({path: path.join(__dirname, 'database.env')});
const username = process.env.POSTGRES_USER
const password = process.env.POSTGRES_PASSWORD
const dbname = process.env.POSTGRES_DB

console.log(username)

const sequelize = new Sequelize(`postgres://${username}:${password}@0.0.0.0:5432/${dbname}`);module.exports = sequelize;