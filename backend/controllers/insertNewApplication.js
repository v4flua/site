import { connection } from "../db.js";

export async function insertNewApplication(req, res){
    console.log(req.body)

    const newUserApplication = [req.body.car_number, req.body.description]
    const sql = "INSERT INTO application (car_number, description) VALUES (?, ?)"

    connection.query(sql, newUserApplication, (err, results) => {
        if(err){
            console.log(err)
        }
        else{
            console.log("Заявка добавлена")
        }
    })
}