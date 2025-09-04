require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

const httpStatusText = require('./constants/httpStatusText');

mongoose.connect(MONGO_URL).then(() => {
    console.log('mongodb server started');
});

const usersRouter = require('./routes/users.route');
const emailRouter = require('./routes/email.route');

app.use('/api/users', usersRouter);
app.use('/api/email', emailRouter);

app.all("*", (req, res, next) => {
    return res.status(404).json({
        status: httpStatusText.ERROR, 
        message: 'this resource is not available'
    });
});

// global error handler
app.use((error, req, res, next) => {
    res.status(error.statusCode || 500)
        .json({
            status: error.statusText || httpStatusText.ERROR,
            message: error.message,
            code: error.statusCode || 500,
            data: null
        });
});

app.listen(PORT || 4000, () => {
    console.log(`listening on port: ${PORT}`);
});