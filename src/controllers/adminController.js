var path = require('path');
const child = require(`../models/children`);
const SantaList = require('../models/santaList');

exports.serve_page = async (req, res, next) => {
  try {
    res.sendFile(path.resolve('views/admin.html'));
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.list_children = async (req, res, next) => {
    try {
      let [result, _ ]= await child.list_children();
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

exports.list_email = async (req, res, next) => {
try {
    let [result, _ ]= await SantaList.list_email();
    res.status(200).json(result);
} catch (error) {
    console.log(error);
    next(error);
}
};

exports.toggle_send_status = async (req, res, next) => {
  try {
    let [result, _ ] = await SantaList.update_status_email(req.params.id, req.body.status)
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
