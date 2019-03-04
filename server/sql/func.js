const mysql = require('mysql');
const db = require('../configs/db.js');
const pool = mysql.createPool(db);

module.exports = {
    connPool(sql, val, cb) {
        pool.getConnection((err, conn) => {
            let q = conn.query(sql, val, (err, rows) => {
                if (err) throw err;
                cb(err, rows);
                conn.release();
            })
        })
    },

    //json格式
    writeJson(res, code = 200, msg = 'success', data = null) {
        let obj = {
            code,
            msg,
            data
        };
        if (!data) {
            delete obj.data;
        }
        res.send(obj)
    }
}