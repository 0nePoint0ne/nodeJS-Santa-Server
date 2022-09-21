require('dotenv').config()
// where your node app starts
const email = require('./src/services/email');

const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser());
app.use(morgan());

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html

app.use("/" , require('./src/routes/baseRoutes'));
app.use("/wish" , require('./src/routes/santaListRoutes'));
app.use("/admin" , require('./src/routes/adminRoutes'));

// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
  email.start();
});
