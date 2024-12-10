const express = require('express');
const userHandler = require('./handler/users');
const router = express.Router();

router.post('/register', userHandler.register);

module.exports = router;
