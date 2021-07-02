const router = require('express').Router();
const {Manufacturer, Car} = require("../../models")

router.get('/', async (req, res) => {
    try {
        const manufacturerData = await Manufacturer.findAll({
            include: {
                model: Car
            }
        })
        res.status(200).json(manufacturerData)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

router.post('/', async (req, res) => {
    try {
        const manufacturerData = await Manufacturer.create({
            name: req.body.name
        })
        res.status(200).json(manufacturerData)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router