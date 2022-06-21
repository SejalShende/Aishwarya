const mysql = require('mysql');
require('dotenv').config();

config = {
  host: 'localhost',
  user: "root",
  password: "password",
  database: "mfpe",
  multipleStatements: true,
};
const con = mysql.createConnection(config);
con.connect((err) => {
  if (err) throw err;
  console.log('DB CONNECTED');
});

module.exports = {
  con: mysql.createConnection(config),
};
