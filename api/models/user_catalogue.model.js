const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')
const User_catalogue = sequelize.define(
    'user_catalogue', {
    favorite: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    obtained: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
},

    {
        timestamps: false
    })

module.exports = User_catalogue