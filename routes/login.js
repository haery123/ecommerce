const express = require('express');
const welcomeUser = require('../controller/login');
const router = express.Router();
const { users } = require('../data');
const { authorize } = require('../middlerwares/auth')


///login le /login/login vitra jaanx
router.post('/', authorize, welcomeUser)

module.exports = router