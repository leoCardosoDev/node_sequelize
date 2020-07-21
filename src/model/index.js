const Sequelize = require('sequelize')

const sequelize = new Sequelize('mysql://root:12345678@localhost:3306/sequelize')
sequelize.authenticate()
  .then(() => console.log('OK'))
  .catch(() => console.error('Error'))
  sequelize.sync()
  module.exports = sequelize
  