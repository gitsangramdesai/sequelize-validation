var express = require('express');
var router = express.Router();
var db = require('../models')



router.get('/user', async function (req, res, next) {
    var users = await db.User.findAll({
        include: [{
            model: db.AppGroup,
            attributes: ['desc', 'name', 'admin', 'id'],
            //where:{name:'Research'},
            //through: { where: { groupId: 6 } },
            as: 'Group'
        }]
    })

    res.json({
        "msg": "all employee",
        "data": users
    })
});


router.get('/group', async function (req, res, next) {
    var groups = await db.AppGroup.findAll({
        include: [{
            model: db.User,
            attributes: ['firstName', 'lastName', 'email', 'id'],
            //through: { where: { groupId: 6 } },
            as: 'User'
        }]
    })

    res.json({
        "msg": "group",
        "data": groups
    })
});


module.exports = router;

