const mongoose = require('mongoose');

const DBConnect = () => {
    mongoose.connect(process.env.MONGO_URI, {}).then(() => console.log('DB Connected')).catch((err) => console.log('DB Error ', err));
};

module.exports = DBConnect;