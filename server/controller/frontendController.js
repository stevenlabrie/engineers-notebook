const db = require('../models/taskModel');

const frontendController = {};

frontendController.getFrontEnd = (req, res, next) => {
  const query = 'SELECT * FROM frontend';
  db.query(query).then((data) => {
    res.locals.frontEnd = data.rows;
    next();
  });
};

frontendController.getUser = (req, res, next) => {
  const user = req.params.username;
  const userQuery = `SELECT * FROM ${user} WHERE type='Frontend'`;
  db.query(userQuery).then((user) => {
    res.locals.user = user.rows;
    next();
  });
};

frontendController.postFrontend = (req, res, next) => {
  const { title, description, resources, iscompleted, type, name } = req.body;
  const vals = [title, description, resources, iscompleted, type, name];
  const sqlQuery = `INSERT INTO ${name} (title, description, resources, iscompleted, type, name) VALUES ($1, $2, $3, $4, $5, $6)`;
  db.query(sqlQuery, vals).then((data) => {
    res.locals.newFrontend = data;
    next();
  });
};

module.exports = frontendController;
