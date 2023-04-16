const mysql = require('mysql');

var connection = mysql.createConnection({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 10,

});
console.log("  connection created ");
// testing the database connection 

// connection.connect((err) => {
//     if (err) throw err;
//     else console.log("Connected");
// })

module.exports  = connection;