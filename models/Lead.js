'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lead = sequelize.define('Lead', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,

      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
         isEmail : true
      }
    },
    name: {
       type: DataTypes.STRING,
       allowNull: false,
       validate : {
          is : ["^[a-zA-Z ]*[a-zA-Z]$"]
       }
    },
    Contact_number: {
         type: DataTypes.STRING,
         allowNull:true,
         validate : {
           is : ["^([+][9][1]|[9][1]|[0]){0,1}([7-9]{1})([0-9]{9})$"]
         }
    }
  });

  return Lead; 
};
