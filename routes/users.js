const express = require('express');
const userHandler = require('./handler/users');
const router = express.Router();

router.post('/register', userHandler.register);
router.post('/login', userHandler.login);

module.exports = router;
