const {DataTypes} = require('sequelize')
const sequelize = require("../config/connection")

const Manufacturer = sequelize.define("manufacturer", {
    name: {
        type: DataTypes.STRING,
        allownull: false
    }
}, {timestamps: false})

module.exports = Manufacturer