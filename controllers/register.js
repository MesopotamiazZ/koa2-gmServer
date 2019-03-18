const connection = require('../dbc/connection.js');
const uuid = require('uuid');

module.exports = async(ctx) => {
  ctx.state.code = 200;
  ctx.state.data = ctx.request.body;
}

// function insertUser() {
//   let id = uuid.v1();
//   // let username = 
//   return new Promise(function (resolve, reject) {
//     var sql = 'INSERT INTO game_user values()';
//     mysql.query(sql, function (error, results, fields) {
//       if (error) {
//         return mysql.rollback(function () {
//           throw error
//         });
//       } else {
//         // console.log(results)
//         resolve(results)
//       }
//     })
//   })
// }