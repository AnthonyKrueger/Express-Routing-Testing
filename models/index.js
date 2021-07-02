const Car = require("./Car")
const Owner = require("./Owner")
const Manufacturer = require("./Manufacturer")
const IndividualCar = require("./IndividualCar")

Car.belongsTo(Manufacturer, {
    foreignKey: 'manufacturer_id'
})

Manufacturer.hasMany(Car, {
    foreignKey: 'manufacturer_id'
})

Car.belongsToMany(Owner, {through: IndividualCar})
Owner.belongsToMany(Car, {through: IndividualCar})
Car.hasMany(IndividualCar);
IndividualCar.belongsTo(Car);
Owner.hasMany(IndividualCar);
IndividualCar.belongsTo(Owner);

module.exports = {Car, Owner, Manufacturer, IndividualCar};