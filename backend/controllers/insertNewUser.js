import { connection } from "../db.js";

export async function insertNewUser(req, res){

    console.log(req.body);

    const newRegUser = [req.body.fio, req.body.telephone, req.body.email, req.body.login, req.body.password];
    const sql = "INSERT INTO user (fio, telephone, email, login, password) VALUES (?, ?, ?, ?, ?)"

    connection.query(sql, newRegUser, (err) => {
        if(err){
            console.log("ERROR");
            console.log(err.sqlMessage);
            return res.status(400).send(JSON.stringify(err.sqlMessage))
        }
        else {
            console.log('Данные добавлены')
            return res.status(200).send(JSON.stringify('Данные добавлены'))
        }
    })
}