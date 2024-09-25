const express = require('express');
const { adminLogin, loginUser } = require('../controllers/auth.controller');
const router = express.Router();

router.post('/admin-login', adminLogin);
router.post('/login', loginUser);

module.exports = router;