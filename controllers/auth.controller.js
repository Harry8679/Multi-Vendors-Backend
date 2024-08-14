const asyncHandler = require('express-async-handler');

const adminLogin = asyncHandler(async(req, res) => {
    // console.log('req.body', req.body);
    const { email, password } = req.body;
    res.send('Hello from API');
});

module.exports = { adminLogin }