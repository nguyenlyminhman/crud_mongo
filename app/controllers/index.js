const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Users = require('../model/Users');

router.get('/', (req, res) => {
    Users.find({}).exec((err, data) => {
        res.render('index', {
            title: "Add new user",
            data: data
        });
    })
});

router.get('/user/add-new', (req, res) => {
    res.render('add', {
        title: "List the user"
    });
});

router.post('/user/add-new', (req, res) => {
    let userParams = req.body;
    let user = new Users(userParams);
    user.save((err, success) => {
        if (!err) {
            res.redirect("/");
        }
    })
});

router.get('/user/edit/:id', (req, res) => {
    let id = req.params.id;
    Users.findById(id, (err, data) => {
        res.render('edit', {
            title: "Edit the user",
            data: data
        });
    })
});

router.put('/user/edit/', (req, res) => {
    let user = req.body;

    let condition = { _id: user._id }
    let update = { $set: { email: user.email, fullname: user.fullname, age: user.age } }

    Users.update(condition, update, (err, cb) => {
        if (err) {
            res.json({ status_code: 500 });
        } else {
            res.json({ status_code: 200 });
        }
    })
});

router.delete('/user/delete', (req, res) => {
    let user = req.body;
    Users.findByIdAndRemove(user._id, (err, cb)=>{
        if (err) {
            res.json({ status_code: 500 });
        } else {
            res.json({ status_code: 200 });
        }
    })

});

module.exports = router;
