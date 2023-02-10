import express from "express";
import morgan from "morgan";

const app=express();

//Settings
app.set("port", 4000);

//middleware
app.use(morgan("dev"));

export default app;
 