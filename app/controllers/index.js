const express = require("express");
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;

router.get('/', (req, res) => {
    res.render('index', {
        title: "Crud with mongodb"
    });
});

router.get('/user/add-new', (req, res) => {
    res.render('add', {
        title: "Add new user"
    });
});

router.get('/user/view-list', (req, res) => {
    res.render('list', {
        title: "List the user"
    });
});

module.exports = router;
