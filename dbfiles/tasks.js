const Sequelize = require('sequelize');
const database = require('../db');
const clients = require('./clients'); // Assuming clients model is in a separate file

const tasks = database.define('tasks', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  auvoId: Sequelize.INTEGER,
  clientId: {
    type: Sequelize.INTEGER,
    allowNull: false, // Mark clientId as not nullable
  },
  equipId: Sequelize.INTEGER,
  typeId: Sequelize.INTEGER,
  type: Sequelize.STRING,
  obs: Sequelize.STRING,
  osurl: Sequelize.STRING,
  taskDate: Sequelize.DATE,
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

// Define a associação entre tasks e clients (assuming tasks hasOne client)
tasks.hasOne(clients, { foreignKey: 'clientId', sourceKey: 'id' });

module.exports = tasks;
