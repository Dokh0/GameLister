const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database/index')

const Catalogue = sequelize.define(
    'catalogue', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rate: {
            type: DataTypes.DECIMAL,
            allowNull: false,
    }
},

{
    timestamps: false
})

module.exports = Catalogue