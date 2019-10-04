const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const routes = require('./routes')

const app = express();
app.use(logger('dev'));
app.use(errorhandler());

app.use(routes);

app.listen(3000, () => {
    console.log('listening 3000')
})



