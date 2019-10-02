var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'restapi'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('connected!');
});

module.exports = connection;

// const Sequelize = require('sequelize')
// const db = {}
// const sequelize = new Sequelize('restapi', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql',
//   operatorsAliases: false,

//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// })

// db.sequelize = sequelize
// db.Sequelize = Sequelize

// module.exports = db
