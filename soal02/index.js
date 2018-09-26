
var mysql = require('mysql');

function createConnection() {
    var connection = mysql.createConnection({
       host: "localhost",
       user: "root",
       password: "root"
    });
    return connection;
}

function closeConnection(connection) {
    connection.end(function(err){
        if(err) {
            console.log(err);
        } else {
            console.log('koneksi ditutup!');
        }
    });
}

function createDatabase(){
    var connection = createConnection();
    connection.connect(function(err) {
        if (err) throw err;
            console.log("Connected!");
        connection.query("CREATE DATABASE IF NOT EXISTS sde_test_db", function (err, result) {
        if (err) throw err;
        console.log("Database created");
        });
    });
}

function useDatabase(){
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "sde_test_db"
    });
    return connection;
}  

function dropTable(connection){
    var sql = "DROP TABLE IF EXISTS user";
    connection.query(sql, function (err, result) {
    if (err) throw err;
    });
} 

function createTable(connection){
    var sql = "CREATE TABLE IF NOT EXISTS user (nama VARCHAR(255), kelamin VARCHAR(10), umur INT)";
    connection.query(sql, function (err, result) {
    if (err) throw err;
    });
}

function insertData(connection){
    var sql1 = "INSERT INTO user (nama, kelamin, umur) VALUES ('Nama 01', 'Wanita', '40')";
    var sql2 = "INSERT INTO user (nama, kelamin, umur) VALUES ('Nama 02', 'Wanita', '32')";
    var sql3 = "INSERT INTO user (nama, kelamin, umur) VALUES ('Nama 03', 'Wanita', '35')";
    var sql4 = "INSERT INTO user (nama, kelamin, umur) VALUES ('Nama 01', 'Pria', '40')";
    var sql5 = "INSERT INTO user (nama, kelamin, umur) VALUES ('Nama 02', 'Pria', '32')";
    var sql6 = "INSERT INTO user (nama, kelamin, umur) VALUES ('Nama 03', 'Pria', '35')";
    var sqlParam = [sql1, sql2, sql3, sql4, sql5, sql6];
    for (var i = 0; i< sqlParam.length; i++){
        connection.query(sqlParam[i], function (err, result) {
            if (err) throw err;
        });
    }
}

function selectData(connection){
    connection.query("SELECT * FROM user", function (err, result, fields) {
        if (err) throw err;
        console.log("Semua user:")
        console.log(result);
    });
}

function selectDataByCriteria(connection){
    connection.query("SELECT * FROM user where kelamin = 'Pria' and umur > 35", function (err, result, fields) {
        if (err) throw err;
        console.log("User berkelamin pria berumur > 35:")
        console.log(result);
    });
}

function selectCountDataByCriteria(connection){
    connection.query("SELECT count(*) as cnt FROM user where kelamin = 'Pria' and umur > 35", function (err, result, fields) {
        if (err) throw err;
        console.log("Jumlah user berkelamin pria berumur > 35 adalah " + result[0].cnt + ' orang')
    });
}



function main(){
    var connection = useDatabase();
    connection.connect(function(err) {
        if (err) throw err;
        dropTable(connection);
        createTable(connection);
        insertData(connection);
        selectData(connection);
        selectDataByCriteria(connection);
        selectCountDataByCriteria(connection);
    });
}

main();
