const { DataTypes } = require('sequelize');
const sequelize = require('../Util/db');

const PersonTable = sequelize.define('Person', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isNumeric: true,
      min: 0
    }
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isGenderTrue(value) {
        value = value.trim();
        const values = ['Male', 'male', 'M', 'm', 'Female', 'female', 'f'];
        if (!values.includes(value)) {
          throw new Error('Invalid Gender');
        }
      },
    }
  },
  amount: {
    type: DataTypes.INTEGER,
    validate: {
      isNumeric: true,
      min: 0,
    }
  }
}, {
  tableName: 'Persons'
});

module.exports = PersonTable;