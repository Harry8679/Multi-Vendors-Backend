const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const userRoutes = require('./routes/auth.route');

app.use(express.json());


app.use('/api/v1/users', userRoutes);

const port = process.env.PORT || 5660;

app.get('/', (req, res) => {
    res.send('My backend');
});

app.listen(port, () => console.log(`Server is running on port ${port}`));