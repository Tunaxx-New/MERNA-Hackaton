const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');

const User = require('./Schemas/Users.model');
const LocalStrategy = require('passport-local').Strategy;


const app = express();

passport.use(new LocalStrategy(User.authenticate()));
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

app.post('/logout', function(req, res, next){
    req.logout(function(err) {
        if (err) { return next(err); }
        res.send(err);
    });
});

require('./routes/auth')(app)
require('./routes/admin')(app)
require('./routes/cashier')(app)
require('./routes/getters')(app)
require('./routes/order')(app)



app.listen(3001, () => {
    console.log("Server has been started at port 3001")
});