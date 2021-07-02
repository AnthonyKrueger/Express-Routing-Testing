const router = require('express').Router();
const ownerRoutes = require('./ownerRoutes')
const carRoutes = require('./carRoutes')
const manufacturerRoutes = require('./manufacturerRoutes')
const individualCarRoutes = require('./individualCarRoutes')

router.use('/owners', ownerRoutes);
router.use('/cars', carRoutes);
router.use('/manufacturers', manufacturerRoutes);
router.use('/individualcars', individualCarRoutes);

module.exports = router;