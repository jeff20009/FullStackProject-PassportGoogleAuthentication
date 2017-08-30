// common js module since this is server side
// no import syntax since we are using back-end and not react sideconst express = require('express');
const express = require('express');
const mongoose = require('mongoose');
// added cookieSession , passport, and keys | no bodyParser
// const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
// require('./models/User');
// require('./models/Survey');


// require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
