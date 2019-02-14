const mysql = require('mysql');

const db = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'test1'
};

let pool = mysql.createPool(db)

pool.getConnection((err, conn) => {
    conn.query('select * from user', 'user', (err, rows) => {
        if (err) throw err;
        conn.release();
        console.log(rows)
    })
})