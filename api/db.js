import mysql from "mysql";

export const db = mysql.createConnection({
    host:"us-cdbr-east-06.cleardb.net",
    user:"b4c54e27d32977",
    password: '235699c9',
    database: "heroku_07f7838776af11d"
});
