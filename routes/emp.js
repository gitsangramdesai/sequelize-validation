var express = require('express');
var router = express.Router();
var db = require('../models')


/* when required=true inner join when false left outer join*/
router.get('/', async function (req, res, next) {
    var employees = await db.Employee.findAll({
        where: { job: "MANAGER" },
        attributes: ['name', 'salary', 'empDeptId', 'hiredate', 'job'],
        include: [
            {
                model: db.Dept, as: 'Department',
                required: false
            }
        ],
        limit: 5,
        order: ["job"]
    })

    res.json({
        "msg": "all employee",
        "data": employees
    })
});

//group by having
router.get('/groupby', async function (req, res, next) {

    var maxSalary = await db.Employee.findAll({
        attributes: ['job', [db.sequelize.fn('max', db.sequelize.col('salary')), 'maxSalary']],
        group: ["job"],
        having: db.sequelize.where(
            db.sequelize.fn('max', db.sequelize.col('salary')),
            {
                [db.Sequelize.Op.lte]: 6000,
            }
        )
    })

    res.json({
        "msg": "all employee",
        "data": maxSalary
    })
});

//max without group by
router.get('/max', async function (req, res, next) {

    var maxSalary = await db.Employee.findAll({
        attributes: [
            [db.sequelize.fn('max', db.sequelize.col('salary')), 'maxSalary']
        ]
    })

    res.json({
        "msg": "all employee",
        "data": maxSalary
    })
});

//between
router.get('/between', async function (req, res, next) {
    var employees = await db.Employee.findAll({
        where: {
            hiredate: {
                [db.Sequelize.Op.between]: ['1980-01-01 00:00:00', '2023-04-01 23:59:59']
            }
        },
        attributes: ['name', 'salary', 'empDeptId', 'hiredate', 'job'],
        include: [
            {
                model: db.Dept, as: 'Department',
                required: false
            }
        ],
        limit: 5,
        order: ["job"]
    })

    res.json({
        "msg": "all employee",
        "data": employees
    })
});
module.exports = router;
