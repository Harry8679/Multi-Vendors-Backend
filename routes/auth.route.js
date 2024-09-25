const express = require('express');
const { adminLogin, loginUser, registerUser } = require('../controllers/auth.controller');
const router = express.Router();

router.post('/admin-login', adminLogin);
router.post('/login', loginUser);
router.post('/register', registerUser);

module.exports = router;