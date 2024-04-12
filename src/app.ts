import  express  from "express";
import cors from "cors"
import logger from "morgan";
//import { Router } from "express";

export const app = express()

app.use(express.json())
app.use(cors())
app.use(logger("dev"))
