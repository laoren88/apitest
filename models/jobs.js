'use strict';

module.exports = (sequelize, DataTypes) => {
    var Jobs = sequelize.define('jobs', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        subject: DataTypes.STRING,
        status: DataTypes.BOOLEAN
    }, {
        freezeTableName: true,
        underscored: true
    });

    return Jobs;
}