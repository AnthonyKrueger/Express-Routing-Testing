const router = require('express').Router();
const apiRoutes = require('./api');
const path = require('path')

router.use('/api', apiRoutes);

router.get('/', (req, res) => {
    try {
        res.status(200).sendFile(path.join(__dirname, '../html/index.html'))
    }
    catch {
        res.status(404).send("Oh No!")
    }
})

module.exports = router;