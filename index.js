const express = require('express'); 
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');           //package to hide sensitive info
//Import Routes
const authRoute = require('./routes/auth');

dotenv.config();


//Connect to DB
mongoose.connect(process.env.DB_CONNECT,
{ useNewUrlParser: true, useUnifiedTopology: true }, 
() => console.log('Connected to database')
);


//Middlewear
app.use(express.json());


//Route Middlewar
app.use('/api/user', authRoute);


app.listen(3000, () => console.log('Server running'));
