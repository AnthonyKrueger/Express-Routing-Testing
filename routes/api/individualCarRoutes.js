const router = require('express').Router();
const {IndividualCar, Car} = require("../../models")

router.get('/', async (req, res) => {
    try {
        const individualData = await IndividualCar.findAll({ include: [{ all: true, nested: false }]})
        res.status(200).json(individualData)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

router.post('/', async (req, res) => {
    try {
        const individualData = await IndividualCar.create(req.body)
        res.status(200).json(individualData)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router