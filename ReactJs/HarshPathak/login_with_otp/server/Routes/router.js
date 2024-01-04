const express = require('express');
const router = new express.Router();
const controllers = require('../contorllers/userControllees');

// Routes
router.post('/user/register', controllers.userregister);

module.exports = router;
