const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const Animal = sequelize.define('Animal', {
    id: {
        type: DataTypes.INTEGER
    },
    animal_type: {
      type: DataTypes.STRING
    },
    breed_type: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    age: {
      type: DataTypes.INTEGER
    },
    health: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    },
    location: {
      type: DataTypes.STRING
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      }
    }
  })
  
  module.exports = Animal