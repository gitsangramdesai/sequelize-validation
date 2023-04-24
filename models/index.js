var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var sequelize = require('../utils/database')
var basename = path.basename(__filename);
var db = {};

fs.readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        var model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.Employee.belongsTo(db.Dept, { as: 'Department', foreignKey: 'empDeptId' });
db.Dept.hasMany(db.Employee, { as: 'Employee', foreignKey: 'empDeptId' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;