const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234qwer',
    database: 'blog'
});

const promisePool = pool.promise();

module.exports = { promisePool };
