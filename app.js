const express = require('express');
const app = express();
const config = require('config');
let controller = require(__dirname + "/app/controllers");

app.set("views", __dirname+"/app/views");
app.set("view engine", "ejs");
app.use("static", express.static(__dirname + "public"));

app.use(controller);

let host = config.get("server.host");
let port = config.get("server.port");

app.listen(port, () => {
    console.log('CRUD mongodb app listening on port', port);
});
