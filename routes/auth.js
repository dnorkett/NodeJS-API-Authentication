const router = require('express').Router();
const User = require('../model/User');
const {registerValidation, loginValidation} = require('../validation');

router.post('/register', async (req, res) => {          
    //Validate data before making a user    
    const {error} = registerValidation(req.body);    
    if (error) return res.status(400).send(error.details[0].message);

    //Checking if the user is already in the database
    const emailExists = await User.findOne({email: req.body.email});
    if (emailExists) return res.status(400).send('Email alreadt exists');
    
    //If valid information, create user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    }catch(err){
        res.status(400).send(err);
    }
});


module.exports = router;