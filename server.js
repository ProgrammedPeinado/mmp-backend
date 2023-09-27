const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const router = express.Router();
const shows = require('./routes/shows');
const admins = require('./routes/admins');
const users = require('./routes/users');
const movies = require('./routes/movies');
const transactions = require('./routes/transactions');

const { Config } = require('./config_aws.js');

const connection = mysql.createConnection({
  host     : Config.host,
  user     : Config.user,
  password : Config.password,
  database : Config.database
});

var corsOption = {origin: "http://localhost:4200"}
connection.connect(function(err) {
  if (err) throw err;
});

const port = process.env.PORT || Config.port;

const app = express()
  .use(cors(corsOption))
  .use(bodyParser.json())
  .use(shows(connection))
  .use(admins(connection))
  .use(users(connection))
  .use(movies(connection))
  .use(transactions(connection))
  .use((req, res, next) =>
{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT,DELETE');
    if('OPTIONS' == req.method)
    {
        res.sendStatus(200);
    }
    else
    { 
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
});;

app.use('/', router);
app.listen(port, () => 
{
  console.log(`Express server listening on port ${port}`);
});