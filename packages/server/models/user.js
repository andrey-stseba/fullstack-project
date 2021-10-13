'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate (models) {
      // define association here
    }
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[A-Z][a-z]{1,39}$/,
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[A-Z][a-z]{1,39}$/,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      // {fn, ln, password, ...}
      // {fn, ln, passwordHash, ...}
      passwordHash: {
        type: DataTypes.STRING,
        allowNull: false,
        set (value) {
          this.setDataValue('passwordHash', bcrypt.hashSync(value, 10));
        },
      },
      gender: {
        type: DataTypes.STRING,
      },
      birthday: {
        type: DataTypes.DATEONLY,
        validate: {
          isBefore: DataTypes.NOW,
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
