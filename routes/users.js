var express = require('express');
var router = express.Router();
var db = require('../models')
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/signin', async function (req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;

  if (!req.body.email || !req.body.password) {
    res.status(400).send({
      msg: 'Please enter email and password.'
    });
  } else {
    try {
      let user = await db.User.create({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
      })

      var returnValue = JSON.parse(JSON.stringify(user))
      delete returnValue.password;

      res.status(201).send({
        msg: 'User created successfully',
        data: returnValue
      });

    } catch (exp) {
      console.log("Error", exp)
      res.status(201).send({
        msg: 'Error Occured while creating User:' + exp.toString()
      });
    }

  }


});


router.post('/login', async function (req, res, next) {
  var email = req.body.email;
  var user = await db.User.findOne({
    where: { email: email }
  })

  if (!user) {
    res.json({ "msg": "invalid username & password" })
  } else {
    var re = await bcrypt.compare(req.body.password, user.password)
    var fullName = user.getFullName();
    var upper = await user.CapitalizeFirstName()
    if (re) {
      var payload = { id: upper.id, fullName: fullName };
      var token = jwt.sign(payload, process.env.SECRET_KEY);
      res.json({ message: "ok", token: token });
    } else {
      res.status(401).json({ message: "passwords did not match" });
    }
  }
})


router.get('/userlist', async function (req, res, next) {
  var userList = await db.User.findAll({
    attributes: ["firstName", "lastName", "createdAt", "email"]
  })

  res.json({
    "msg": "userlist",
    "data": userList
  })
})
module.exports = router;
