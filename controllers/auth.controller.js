const asyncHandler = require('express-async-handler');
const Admin = require('../models/admin.model');
const { responseReture } = require('../utiles/response.util');
const bcrypt = require('bcrypt');
const { createToken } = require('../utiles/tokenCreate.util');
const { response } = require('express');

const adminLogin = asyncHandler(async(req, res) => {
    // console.log('req.body', req.body);
    const { email, password } = req.body;

    try {
        const admin = await Admin.findOne({ email }).select('+password');
        console.log('admin', admin);

        if (admin) {
            const match = await bcrypt.compare(password, admin.password);
            // console.log(match);
            if (match) {
                const token = await createToken({ id: admin.id, role: admin.role });

                res.cookie('accessToken', token, { expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) });

                responseReture(res, 200, { token, message: 'Login Success' });
            } else {
                responseReture(res, 404, { error: 'Password Wrong' });
            }
        } else {
            responseReture(res, 404, { error: 'Email not found' });
        };
    } catch (err) {
        responseReture(res, 500, { error: err.message });
    };

    res.send('Hello from API');
});

const registerUser = asyncHandler(async(req, res) => {
    res.send('Register User');
});

module.exports = { adminLogin, registerUser };