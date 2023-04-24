const sequelize = require('../utils/database')
const bcrypt = require("bcrypt");
var moment = require('moment')
const models = require('../models')

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING,
            field: 'firstName',
            validate: {
                notEmpty: {
                    args: true,
                    msg: "firstName is Required"
                },
                is: {
                    args: ["^[a-z]+$", 'i'],
                    msg: "In firstName Only letters allowed"
                },
                len: {
                    args: [4, 32],
                    msg: "firstName string length is not in this range"
                }
            }
        },
        lastName: {
            type: DataTypes.STRING,
            field: 'lastName',
            validate: {
                notEmpty: {
                    args: true,
                    msg: "lastName is Required"
                },
                is: {
                    args: ["^[a-z]+$", 'i'],
                    msg: "In lastName Only letters allowed"
                },
                len: {
                    args: [2, 32],
                    msg: "lastName string length is not in this range"
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    msg: "Email is not valid"
                },
                isUnique: function (value, next) {
                    User.findOne({
                        where: {
                            email: value
                        }
                    }).then(function (result) {
                        if (result === null) {
                            return next()
                        } else {
                            return next(' Email already in use')
                        }
                    }).catch(err => {
                        return next()
                    })
                }
            }

        },
        password: DataTypes.STRING,
        createdAt: {
            type: DataTypes.DATE,
            get: function () { // or use get(){ }
                var originalDate = this.getDataValue('createdAt')
                return moment(originalDate).utcOffset(330).format('YYYY-MM-DD HH:mm:ss');
            }
        },
        updatedAt: {
            type: DataTypes.DATE,
            get: function () { // or use get(){ }
                var originalDate = this.getDataValue('createdAt')
                return moment(originalDate).utcOffset(330).format('YYYY-MM-DD HH:mm:ss');
            }
        }
    }, {
        validate: {
            modelLevel() {
                var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
                if (!pattern.test(this.password)) {
                    throw new Error("Password should contain atleast one special character,upper case ,lowercase & number")
                }
            }
        },
        freezeTableName: true,
        hooks: {
            beforeCreate: async (user, options) => {
                user.password = await bcrypt.hash(user.password, bcrypt.genSaltSync(8))
            }
        },
        classMethods: {
            //this won't work
            emailAlreadyTaken: async function (email) {
                const result = await this.findOne({ where: { email } });
                return result !== null;
            },
        },
        instanceMethods: {
            //does not work
            CapitalizeFirstName: function () {
                var upperCaseFirstName = this.get("firstName").toUpperCase()
                this.set("firstName", upperCaseFirstName)
                return this.save()
            }
        }
    });

    User.associate = (models) => {
        User.belongsToMany(models.AppGroup, {
            through: 'GroupUser',
            as: 'Group',
            foreignKey: 'UserId'
        });
    };

    //this.work on instance
    User.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName
    };

    //this.work on instance
    User.prototype.CapitalizeFirstName = function () {
        var upperCaseFirstName = this.get("firstName").toUpperCase()
        this.set("firstName", upperCaseFirstName)
        return this.save()
    }
    return User;
}

