const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')
const User = sequelize.define('user', {
        name: { 
            type: DataTypes.STRING, allowNull: false,
         },
        username: {
             type: DataTypes.STRING, allowNull: false,
             },
        email: {
             type: DataTypes.STRING, allowNull: false,
             },
        password: { 
            type: DataTypes.STRING, allowNull: false,
         },
        role: {
             type: DataTypes.STRING, allowNull: false,
             }
    },

    { 
     timestamps: false 
}) 

module.exports = User