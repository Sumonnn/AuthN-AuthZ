const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;


app.use(express.json());

app.listen(PORT, () => {
    console.log("App is listening.. at " + PORT);
})

require('./config/Database').connect();

//route import and mount

const user = require('./routes/user');

app.use('/api/v1', user);


