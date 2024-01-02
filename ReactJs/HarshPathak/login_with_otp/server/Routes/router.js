const express = require('express');
const router = new express.Router();

// Routes
router.post('/user/register', controllers.userregister);

module.exports = router;
