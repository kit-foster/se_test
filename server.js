const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();

app.use(
    cors(),
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());

// Configure Mongo
const db = 'mongodb://127.0.0.1:27017/seer';

// Connect to Mongo with Mongoose
mongoose
    .connect(
        db, 
        { 
            useNewUrlParser: true,
            useUnifiedTopology: true 
        }
    )
    .then(() => console.log("Mongo connected"))
    .catch(err => console.log(err));

// Specify which port and start listening
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("listening on " + PORT);
});

// load routes
const userRouter = require('./routes/user');

app.use('/user', userRouter);