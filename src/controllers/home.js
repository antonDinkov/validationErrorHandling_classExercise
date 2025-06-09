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
    
    const { errors } = validationResult(req);

    if (errors.length > 0) {
        res.render('home', { errors: { message: 'Invalid input' }});
        return;
    }
    res.redirect('/');
});

module.exports = { router }