const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database/index')

const Platform = sequelize.define(
    'platform', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
    },
        version: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
    },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
    },
},

{
    timestamps: false
})

module.exports = Platform