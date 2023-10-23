const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database/index')

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
        owned: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
},

{
    timestamps: false
})

module.exports = User_catalogue