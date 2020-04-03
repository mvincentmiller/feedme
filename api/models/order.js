const Sequelize = require('sequelize');
const sequelize = require('../initializeDb');const order = sequelize.define('Order', {
  order_id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  customer_id: Sequelize.STRING,
  employee_id: Sequelize.INTEGER,
  order_date: Sequelize.DATE,
  required_date: Sequelize.DATE,
  shipped_date: Sequelize.DATE,
  ship_via: Sequelize.INTEGER,
  freight: Sequelize.REAL,
  ship_name: Sequelize.STRING,
  ship_address: Sequelize.STRING,
  ship_city: Sequelize.STRING,
  ship_region: Sequelize.STRING,
  ship_postal_code: Sequelize.STRING,
  ship_country: Sequelize.STRING,
}, {
  schema: 'public',
  tableName: 'orders',
  timestamps: false,
});module.exports = order;