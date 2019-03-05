const mysql = require('../dbc/connection.js');

module.exports = async (ctx) => {
  ctx.state.code = 200;
  ctx.state.data = await queryAllUser();
}

function queryAllUser(value) {
  return new Promise(function (resolve, reject) {
    // var sql = 'SELECT * FROM game_user ORDER BY ' + jdbc.escapeId('uid');
    var sql = 'SELECT * FROM game_user';
    mysql.query(sql, function (error, results, fields) {
      if (error) {
        return mysql.rollback(function () {
          throw error
        });
      } else {
        // console.log(results)
        resolve(results)
      }
    })
  })
}