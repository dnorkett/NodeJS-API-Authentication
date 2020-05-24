const router = require('express').Router();
const userModel = require('../model/User');


//Everything in this route is relative to /api/user
router.post('/register', async (req, res) => {
    const user = new user({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    try {
        const savedUser = await user.save();
    }catch(err){
        res.status(400).send(err);
    }
});


module.exports = router;