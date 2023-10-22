const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')
const Platform_catalogue = sequelize.define(
    'platform_catalogue', {
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

module.exports = Platform_catalogue