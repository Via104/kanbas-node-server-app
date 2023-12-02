import express from 'express'
import session from "express-session";
import Hello from "./hello.js"
import Lab5 from "./Lab5.js"
import cors from "cors"
import "dotenv/config"
// import session from "express-session";
import CourseRoutes from './courses/routes.js'
import ModuleRoutes from './modules/routes.js'
import UserRoutes from './users/routes.js'
import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
const app = express()
app.use(express.json())
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "http://localhost:3001" ],
  })
 ); 
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
app.use(
  session(sessionOptions)
);

ModuleRoutes(app)
CourseRoutes(app)
UserRoutes(app)
Hello(app)
Lab5(app)
// app.listen(process.env.PORT || 4000)
app.listen(4000)

