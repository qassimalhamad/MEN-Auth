// Imports
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const methodOverride = require("method-override");
const morgan = require("morgan");

require('./config/database')

const app = express();
// Set the port from environment variable or default to 3000
const port = process.env.PORT ? process.env.PORT : "3000";

// MiddleWare

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(morgan('dev'));


// Routes

app.get("/", async (req, res , next) => { // Path
    res.render("index.ejs"); //We need a file when render, it already sees the views file
  });


app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});