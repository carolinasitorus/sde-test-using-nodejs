// var mysql = require('mysql');
// var http = require('http');

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database:"sinotif_public"
// });

// con.connect(function(err) {
//     if(!err) {
//         http.createServer(function (req, res) {
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end('Koneksi berhasil');
//     }).listen(1234, "127.0.0.1");
//     console.log('Server running at http://127.0.0.1:1234/');
//     }else{
//     console.log("Error connecting database");
//     }
// });

//app.js
// var mysql = require('mysql');

/**
* Setting opsi dari connection, 
* lihat https://github.com/felixge/node-mysql/
*/
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root'
// });

// //Membuka koneksi ke database MySQL
// connection.connect(function(err){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('Koneksi dengan id '+ connection.threadId);
//     }
// });

// // Query bisa dilakukan di sini
// var create_db = 'CREATE DATABASE IF NOT EXISTS sde_test';
// connection.query(create_db, function(err, result){
//     if(err){
//       console.log(err);
//     } else {
//       console.log(result);
//     }
// });
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE IF NOT EXISTS sde_test", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "sde_test"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE users (nama VARCHAR(255), kelamin VARCHAR(10), umur INT)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

  var sql = "INSERT INTO users (nama, kelamin, umur) VALUES ('Carolina', 'Wanita', '19')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

});

// var ebook = {
//     id: 1,
//     title: 'Wiro Sableng Pendekar Kapak Maut Naga Geni 212 : Batu Tujuh Warna',
//     pengarang: 'Bastian Tito'
// };

// var insert_sql = 'INSERT INTO ebook SET ?';

// connection.query(insert_sql, ebook, function(err, result){
//     err ? console.log(err): console.log(result);
// });

//Menutup koneksi
// connection.end(function(err){
//    if(err) {
//        console.log(err);
//     } else {
//        console.log('koneksi ditutup!');
//    }
// });