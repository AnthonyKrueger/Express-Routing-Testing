const router = require('express').Router();
const {Owner, Car} = require("../../models")

router.get('/', async (req, res) => {
    try {
        const ownerData = await Owner.findAll({
            include: Car
        })
        res.status(200).json(ownerData)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

router.post('/', async (req, res) => {
    try {
        const ownerData = await Owner.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age
        })
        res.status(200).json(ownerData)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router