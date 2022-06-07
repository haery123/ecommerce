const express = require('express');
const register = require('../controller/register');
const router = express.Router();
const { users } = require('../data')
const { validate } = require('../middlerwares/auth')
const registerUser = require('../controller/register')


//  /register/rwgister vitra jaanx that is route
router.post('/', validate, registerUser)
module.exports = router