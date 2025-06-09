const { Router } = require('express');
const { body, validationResult  } = require('express-validator');

const router = Router();

router.get('/', (req, res) => {
    console.log('Hello');
    
    res.render('home');
});

router.post('/',
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min: 5}).withMessage('Min 5 char required'), 
    (req, res) => {
    
    const result = validationResult(req);
    console.log(result);
    
    const errors = Object.fromEntries(result.errors.map(e => [e.path, e.msg]));
    

    if (result.errors.length > 0) {
        res.render('home', { errors });
        return;
    }
    res.redirect('/');
});

module.exports = { router }