const mysql = require("mysql2");

const pool = mysql.createPool({
    host: process.env.DB_HOST || "sql6.freemysqlhosting.net", 
    user: process.env.DB_USER || "sql6519994",
    database: process.env.DB_NAME || "sql6519994",
    password: process.env.DB_PASSWORD || "qLUJ8FFNQw", //"123",
})

module.exports = pool.promise();