const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/', async (req, res) => {
    try {
        res.status(200).send("Connected!")
    }
    catch {
        res.status(404).send("Oh No!")
    }

})

module.exports = router;