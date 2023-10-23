const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database/index')

const Collection = sequelize.define(
    'collection', {
        title_collection: {
            type: DataTypes.STRING,
            allowNull: false,
    },
},

{
    timestamps: false
})

module.exports = Collection