'use strict';

import express from 'express'
import path from 'path'
import logger from 'morgan'
import compress from 'compression'
import apiRoutes from './routes/api'

// 3rd middleware
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

// database
import config from './config'
let dbUrl = `mongodb://${config.USERNAME}:${config.PASSWORD}@${config.HOST}:${config.PORT}/${config.DB}`;
mongoose.Promise = global.Promise;
mongoose.connect(dbUrl)

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ', err);
});

var app = express();

app.use(logger('dev'));
app.use(compress());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// static server
app.use('/admin', express.static(path.join(__dirname, '../front-end/admin/public/')));
app.use('/', express.static(path.join(__dirname, '../front-end/index/')));

//设置跨域访问
app.all('/api/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "token, X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Expose-Headers", "token");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use('/api', apiRoutes);

app.get('/admin/*', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../front-end/admin/public/index.html'));
})

app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../front-end/index/index.html'));
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
    res.status(404).send('Sorry, we cannot find that!');
    // var err = new Error('Not Found');
    // err.status = 404;
    // next(err);
});

if (app.get('env') === 'dev') {
    app.set('showStackError', true)
    app.locals.pretty = true
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({msg: err.message, error: err})
    });
}

module.exports = app;