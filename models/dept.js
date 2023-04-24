const sequelize = require('../utils/database')
var Employee = require('./employee')

module.exports = function (sequelize, DataTypes) {
    const Dept = sequelize.define('Dept', {
        deptId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            field: 'name'
        },
        location: {
            type: DataTypes.STRING,
            field: 'location'
        }
    }, {
        freezeTableName: true
    });
    

    return Dept;
}
