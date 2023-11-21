import express from 'express'
import Hello from "./hello.js"
import Lab5 from "./Lab5.js"
import cors from "cors"
import "dotenv/config"
// import session from "express-session";
import CourseRoutes from './courses/routes.js'
import ModuleRoutes from './modules/routes.js'
const app = express()
app.use(express.json())
app.use(cors());
ModuleRoutes(app)
CourseRoutes(app)
Hello(app)
Lab5(app)
app.listen(process.env.PORT || 4000)

