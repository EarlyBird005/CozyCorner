import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { loggerMidddleware } from "./middlewares/logger.middleware.js";
// import bodyParser from "body-parser";

export const app = express();

// middlewares
app.use(cors());
// app.use(cors({
//     origin: process.env.CORS_ORIGIN, // to give limitate access
//     credentials: true
// }));
// app.use(express.json({ limit: "20kb"})); // give limitation 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); // extended: true -> all the latest property available 
app.use(express.static("public")); // -> ?
app.use(cookieParser());
// app.use(bodyParser.json()); // might not needed
app.use(loggerMidddleware); // logger middleware

// routes
import healthCheckRouter from "./routes/healthCheck.routes.js";
import userRouter from "./routes/user.routes.js"
app.use("/api/haelthCheck", healthCheckRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
    res.send("hii");
    // res.send("<h1>tal</h1>");
});

// app.post("/", (req, res) => {
//     res.status(201).send("Tal");
// })