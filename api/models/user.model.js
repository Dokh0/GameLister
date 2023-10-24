const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database/index')

const User = sequelize.define(
     'user', {
        name: { 
            type: DataTypes.STRING, allowNull: false,
         },
        username: {
            type: DataTypes.STRING, allowNull: false,
          },
        email: {
            type: DataTypes.STRING, allowNull: false, unique: true,
          },
        password: {
            type: DataTypes.STRING, allowNull: false,
          },
        role: {
            type: DataTypes.STRING, defaultValue:"user", allowNull: false,
          }
    },

{
     timestamps: false
})

module.exports = User