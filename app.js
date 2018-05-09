const express = require('express');
const app = express();
const config = require('config');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
let controller = require(__dirname + "/app/controllers");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('trust proxy', 1);

app.set("views", __dirname + "/app/views");
app.set("view engine", "ejs");
app.use("static", express.static(__dirname + "public"));

app.use(controller);

let port = process.env.PORT || config.get("server.port");

app.listen(port, () => {
    console.log('CRUD mongodb app listening on port', port);
});
