const asyncHandler = require('express-async-handler');

const adminLogin = asyncHandler(async(req, res) => {
    console.log(req.body);
});

module.exports = { adminLogin }