const {DataTypes} = require('sequelize')
const sequelize = require("../config/connection")

const Car = sequelize.define("car", {
    model: {
        type: DataTypes.STRING,
        allownull: false
    }
}, {timestamps: false})

module.exports = Car