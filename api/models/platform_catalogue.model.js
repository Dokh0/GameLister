//No necesaria por ahora. Futuras mejoras.
const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database/index')

const Platform_catalogue = sequelize.define(
    'platform_catalogue', {
       
},

{
    timestamps: false
})

module.exports = Platform_catalogue