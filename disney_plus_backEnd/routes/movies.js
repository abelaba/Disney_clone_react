const router = require('express').Router();
const Movies = require('../model/Movies');
const User = require('../model/User');
const verify = require('../verifyToken');



// * VIEW ALL MOVIES
router.get('/', async (req, res) => {
    const query = await Movies.find();
    return res.send(query);


});

module.exports = router;