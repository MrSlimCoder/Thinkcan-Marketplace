const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'remotemysql.com',
    user: 's8g9uTjbP4',
    password: 'shgWvSeKDz',
    database: 's8g9uTjbP4'
  });
  con.connect((err) => {
    if(err){
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
  });

module.exports = con;