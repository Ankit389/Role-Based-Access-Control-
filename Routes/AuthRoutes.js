
const express = require('express');
const { signupValidation, loginValidation } = require('../Middlwares/AuthValidation'); 
const { signup, login } = require('../controllers/AuthControllers');


const router = express.Router(); 

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);

module.exports = router; 