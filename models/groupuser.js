const sequelize = require('../utils/database')
const models = require('../models')

module.exports = function (sequelize, DataTypes) {
    const GroupUser = sequelize.define('GroupUser', {
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User',
                key: 'id'
            }
        },
        groupId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'AppGroup',
                key: 'id'
            }
        }
    },{
        freezeTableName: true
    });
    return GroupUser;
};