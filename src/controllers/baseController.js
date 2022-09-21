var path = require('path');

exports.serve_page = async (req, res, next) => {
  try {
    res.sendFile(path.resolve('views/index.html'));
  } catch (error) {
    console.log(error);
    next(error);
  }
};