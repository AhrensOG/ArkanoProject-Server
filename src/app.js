const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());

module.exports = app;