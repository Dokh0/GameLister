const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database/index')

const Contact_info = sequelize.define(
    'contact_info', {
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
    },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
    },
},

{
    timestamps: false
})

module.exports = Contact_info