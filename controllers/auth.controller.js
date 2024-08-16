const asyncHandler = require('express-async-handler');
const Admin = require('../models/admin.model');

const adminLogin = asyncHandler(async(req, res) => {
    // console.log('req.body', req.body);
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email }).select('+password');
    console.log('admin', admin);
    
    res.send('Hello from API');
});

module.exports = { adminLogin }