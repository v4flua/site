import mysql from "mysql2";

export const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "site_mdk12",
    password: ""
})

connection.connect(function(err){
    if(err){
        console.log("Ошибка" + err.message);
    }
    else {
        console.log("Подключение к MySQL прошло успешно");
    }
})