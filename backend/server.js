import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { insertNewUser } from "./controllers/insertNewUser.js";
import { selectAuthUser } from "./controllers/selectAuthUser.js";
import { insertNewApplication } from "./controllers/insertNewApplication.js";

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
const port = 3000;

app.listen(port, () => {
    console.log(`Порт: ${port}`)
})

app.post('/user', insertNewUser)
app.post('/users', selectAuthUser)
app.post('/application', insertNewApplication)