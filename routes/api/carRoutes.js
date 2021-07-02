const router = require('express').Router();
const {Car} = require("../../models")

router.get('/', async (req, res) => {
    try {
        const carData = await Car.findAll()
        res.status(200).json(carData)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

router.post('/', async (req, res) => {
    try {
        const carData = await Car.create({
            model: req.body.model,
            manufacturer_id: req.body.manufacturer_id
        })
        res.status(200).json(carData)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router