const sequelize = require('../utils/database')
const models = require('../models')

module.exports = function (sequelize, DataTypes) {
    const AppGroup = sequelize.define('AppGroup', {
        name: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        desc: {
            allowNull: false,
            type: DataTypes.STRING,
            defaultValue: 'no description'
        },
        admin: {
            allowNull: false,
            type: DataTypes.INTEGER,
            validate: {
                notEmpty: true
            }
        }
    },{
        freezeTableName: true
    });
    AppGroup.associate = (models) => {
        AppGroup.belongsToMany(models.User, {
            through: 'GroupUser',
            as: 'User',
            foreignKey: 'groupId'
        });
    };
    return AppGroup;
};