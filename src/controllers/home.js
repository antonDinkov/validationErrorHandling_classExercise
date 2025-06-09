const { Router } = require('express');
const { body, validationResult  } = require('express-validator');

const router = Router();

router.get('/', (req, res) => {
    console.log('Hello');
    
    res.render('home');
});

router.post('/', body('email').isEmail(), body('password').isLength({min: 5}), (req, res) => {
    
    console.log(validationResult(req));

    res.redirect('/');
});

module.exports = { router }