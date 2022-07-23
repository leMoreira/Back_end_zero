const { DataTypes } = require('sequelize');

module.exports = (app) =>{
    const Users = app.db.define('Users', {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                noEmpty: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                noEmpty:true
            }
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                noEmpty: true
            }
        }
    });

    return Users;


}