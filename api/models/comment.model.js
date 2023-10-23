const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database/index')

const Comment = sequelize.define(
    'comment', {
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
    },
},

{
    timestamps: false
})

module.exports = Comment