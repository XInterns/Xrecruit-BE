const express = require('express')
var connection=require('./methods/dbconnect.js')
var cors = require('cors');
const app = express()

app.set('sql-connection',connection);

const _methods=require('./methods/index.js');
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/',_methods);



app.listen(7000, function () {
    console.log('Server started on http://localhost:7000/')
})