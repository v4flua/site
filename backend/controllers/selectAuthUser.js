import { connection } from "../db.js";

export async function selectAuthUser(req, res){
    console.log(req.body)

    const authNewUser = [req.body.login, req.body.password]
    const sql = "SELECT fio, id_user FROM user WHERE login = ? and password = ?"

    connection.query(sql, authNewUser, (err, results) => {
        if(err){
            console.log("Пользователь не найден", err)
        }
        else {
            console.log("Пользователь: ", results)
        }
        return res.json(results)
    })
}