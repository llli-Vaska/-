let mysql = require('mysql')
exports.base = (sql,data,callback)=>{
	let connection = mysql.createConnection({
	host     : 'localhost',
  	user     : 'root',
  	password : 'root',
  	database : 'user'
	})
	connection.connect();
	connection.query(sql,data, function (error, results, fields) {
  	if (error) throw error;
		  callback && callback(results)
		  //相当于 if callback {callback()};如果回调函数存在，则执行该回调函数。
		  
		  
	})
	connection.end();
}

