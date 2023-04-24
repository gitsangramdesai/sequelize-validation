const sequelize = require('../utils/database')
const models = require('../models')

module.exports = function (sequelize, DataTypes) {
    const Employee = sequelize.define('Employee', {
        empId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            field: 'name'
        },
        salary: {
            type: DataTypes.FLOAT,
            field: 'salary'
        },
        empDeptId: {
            type: DataTypes.INTEGER,
            field: 'empDeptId',
            references: {
                model: 'Dept',
                key: 'deptId'
            }
        },
        hiredate: {
            type: DataTypes.DATE,
            field: 'hiredate'
        },
        job: {
            type: DataTypes.STRING,
            field: 'job'
        }

    }, {
        freezeTableName: true
    });

    Employee.associate = function (models) {
        models.Employee.belongsTo(models.Dept, { as: 'Department', foreignKey: 'empDeptId' });
        models.Dept.hasMany(models.Employee, { as: 'Employee', foreignKey: 'empDeptId' });
    };

    return Employee;
}   