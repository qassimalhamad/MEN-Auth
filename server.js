// Imports
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const methodOverride = require("method-override");
const morgan = require("morgan");
const session = require('express-session');

require('./config/database')

// Controllers

const authController = require('./controllers/auth')

const app = express();
// Set the port from environment variable or default to 3000
const port = process.env.PORT ? process.env.PORT : "3000";

// MiddleWare

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(morgan('dev'));
;

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);



// Routes

app.use('/auth', authController); //app.use is a middleware

app.get("/", (req, res) => {
    res.render("index.ejs", {
      user: req.session.user,
    });
  });


app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});