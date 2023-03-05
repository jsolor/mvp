const db = require('../index');

async function getLogs(sort) {
  return db.query(`
    SELECT name, message, date
    FROM logs
  `)
  .then(({rows}) => rows);
}

async function newLog({ name, message, date }) {
  return db.query(`
  INSERT INTO logs(name, message, date)
    VALUES ($1, $2, $3)
  `, [name, message, date]);
}

module.exports.getLogs = getLogs;
module.exports.newLog = newLog;
