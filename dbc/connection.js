var config = require('../config.js');
var mysql = require('mysql');

var connection = mysql.createConnection(config.mysql);
module.exports = connection;