const {DataTypes} = require('sequelize')
const sequelize = require("../config/connection")

const IndividualCar = sequelize.define("individualcar", {
    color: {
        type: DataTypes.STRING,
        allownull: false
    },
    year: {
        type: DataTypes.STRING,
        allownull: false
    },
    vin: {
        type: DataTypes.STRING,
        allownull: false
    }
})

module.exports = IndividualCar