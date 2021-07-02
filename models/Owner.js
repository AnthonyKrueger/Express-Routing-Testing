const {DataTypes} = require('sequelize')
const sequelize = require("../config/connection")

const Owner = sequelize.define("owner", {
    firstName: {
        type: DataTypes.STRING,
        allownull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allownull: false
    },
    age: {
        type: DataTypes.INTEGER
    }
}, {timestamps: false})

module.exports = Owner