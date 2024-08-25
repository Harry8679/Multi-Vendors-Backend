const asyncHandler = require('express-async-handler');
const Admin = require('../models/admin.model');
const { responseReture } = require('../utiles/response.util');
const bcrypt = require('bcrypt');

const adminLogin = asyncHandler(async(req, res) => {
    // console.log('req.body', req.body);
    const { email, password } = req.body;

    try {
        const admin = await Admin.findOne({ email }).select('+password');
        console.log('admin', admin);

        if (admin) {

        } else {
            responseReture(res, 404, { error: 'Email not found' });
        };
    } catch (err) {
        responseReture(res, 500, { error: err.message });
    };

    res.send('Hello from API');
});

module.exports = { adminLogin }