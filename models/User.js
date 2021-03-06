'use strict';
module.exports = (Sequelize, DataTypes) => {
    var User = Sequelize.define('User', {
     id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      
        allowNull: false,
        primaryKey: true
      },
      userName: {
          type: DataTypes.STRING,
          allowNull: true
      },
      firstName: {
           type: DataTypes.STRING,
           allowNull: true
      },
      lastName: {
            type: DataTypes.STRING,
            allowNull: true
      },
      email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate : {
                  isEmail : true
            }
      },
      password: {
            type: DataTypes.STRING,
            allowNull: true,
      },
      isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: true
      }
    });
    return User;
};