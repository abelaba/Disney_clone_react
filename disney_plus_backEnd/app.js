const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express()
const cors = require("cors");


// * IMPORT ROUTES
const authRoute = require('./routes/auth');
const moviesRoute = require('./routes/movies');


dotenv.config();


// * CONNECT TO DB
mongoose.connect(
    process.env.DB_connect,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () => {
        console.log("*** DATABASE HAS CONNECTED SUCCESSFULLY");
    })



app.use(express.json());
app.use(cors());




app.use('/api/user', authRoute);
app.use('/api/movies',moviesRoute);

// * SERVER START
app.listen(5000, () => {
    console.log("*** SERVER IS RUNNING ON PORT 3000");
})