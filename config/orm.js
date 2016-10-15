var connection = require('../config/connection.js');
var orm =
{
	 showAll: function(table, cb) {
		var queryString = 'SELECT * FROM ' + table + ';';
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	 create: function(table,column,values, cb){
	 	var columnString = column.toString();
	 	var valuesString = "'"+values +"'";
	 	var queryString = 'INSERT INTO' + ' ' +table +' ('+ columnString +') '+ 'VALUES(' + valuesString + ');'
	 	console.log(queryString);
		connection.query(queryString, function(err,result){
			if(err) throw err;
			cb(result);
		});
	 },
	 modify: function (table, column,newValue,condition, cb) {
		var queryString = 'UPDATE ' + table;

		queryString = queryString + ' SET ';
		queryString = queryString + column;
		queryString = queryString + '=';
		queryString = queryString + newValue;
		queryString = queryString + ' WHERE ';
		queryString = queryString + condition;

		console.log(queryString);
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	}	 
}


module.exports = orm;


