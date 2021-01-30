const mysql = require('mysql');

const connMySQL = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'fullstackeletro'
    });
}

module.exports = function(){
    return connMySQL;
}