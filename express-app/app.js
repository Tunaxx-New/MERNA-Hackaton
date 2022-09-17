const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');

const User = require('./Schemas/Users.model');


const app = express();

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

app.use(session({
    secret: 'zebracoffee',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



mongoose.connect("mongodb://127.0.0.1:27017/ZebraCoffee");

app.get('/', (req, res) => {

});

require('./routes/auth')(app)
require('./routes/admin')(app)
require('./routes/cashier')(app)
require('./routes/getters')(app)



app.listen(3001, () => {
    console.log("Server has been started at port 3001")
});