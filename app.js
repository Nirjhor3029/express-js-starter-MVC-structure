// Imports
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const pageRoutes = require('./routes/pageRoutes')
const blogRoutes = require('./routes/blogRoutes')
var mongoose = require('mongoose');
var dbURL = require("./env").DB_URL;

const app = express();

mongoose.connect(dbURL);

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB using Mongoose");
    // Listen on Port 500
    app.listen(port, () => {
        console.info(`App Listening on port ${port}`)
    });
})

const port = 5000;



// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css/'));
// app.use('/js', express.static(__dirname + 'public/js/'));
// app.use('/img', express.static(__dirname + 'public/img/'));

// Set Template Engine
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout', './layouts/full-width.ejs')

// Navigation
app.use(pageRoutes);
app.use('/blog', blogRoutes);