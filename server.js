const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const userRoutes = require('./routes/auth.route');
const DBConnect = require('./config/db');


DBConnect();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ['http://localhost:3005'],
    credentials: true
}));


app.use('/api/v1/users', userRoutes);

const port = process.env.PORT || 5660;

app.get('/', (req, res) => {
    res.send('My backend');
});

app.listen(port, () => console.log(`Server is running on port ${port}`));