const PersonTable = require("../models/Person");
const sequelize = require("../Util/db");
const { Op } = require('sequelize');

const createTable = async (req, res) => {
  try {
    await sequelize.sync();
    await PersonTable.sync();
    res.send({
      success: 1,
      data: "DB Synced Successfully",
    });
  } catch (err) {
    res.send({
      success: 0,
      message: `Error: ${err}`,
    });
  }
};

const allData = async (req, res) => {
  try {
    // const data = await PersonTable.findAll({
    //   where: {
    //     id: {
    //       [Op.gte]: 2,
    //     },
    //   },
    //   raw: true,
    // });
    const data = {
      name: "balkn",
      age: 32
    }
    return res.json(data);
  } catch (err) {
    console.log(`Error: ${err}`);
    return res.send({
      success: 0,
      message: `Error: ${err.message}`,
    });
  }
};

const createRow = async (req, res) => {
  try {
    console.log('createRow called.');
    // const ress = await PersonTable.create({
    //   name: req.body.name,
    //   age: req.body.age,
    //   gender: req.body.gender,
    //   amount: req.body.amount,
    // });
    const ress = {
      name: "fasdf",
      age: 32
    }
    return res.send({
      success: 1,
      data: ress,
    });
  } catch (err) {
    console.log(`Error in creating row. Error: ${err}`);
    return res.send({
      success: 0,
      message: `Error: ${err.message}`,
    });
  }
};

const getSingle = async (req, res) => {
  try{
    // const data = await PersonTable.findOne({
    //   where: {
    //     id: 2
    //   },
    //   raw: true
    // });
    const data = {
      name: "frtr",
      age: 43
    }
    console.log('Data Send Successfully.');
    res.json({
      success: 1,
      data: data
    })
  } catch (err) {
    console.log(`Error in getting dingle. Error: ${err}`);
    res.send({
      success: 0,
      message: 'Error.'
    })
  }
}

module.exports = {
  allData,
  createRow,
  createTable,
  getSingle,
};
