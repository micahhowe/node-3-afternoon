require('dotenv').config();
const express = require('express');
const massive = require('massive')
const app = express()
const ctrl = require('./controller')
const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json())

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
}).catch(err => console.log(err))


app.listen(SERVER_PORT, () => 
console.log(`Andre ${SERVER_PORT} is listening!`)
)