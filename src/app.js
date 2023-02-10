import express from "express";
import morgan from "morgan";
//Routes
import languageRoutes from "./routes/language.routes";

const app = express();

//Settings
app.set("port", 4000);

//middleware
app.use(morgan("dev"));


//Routes
app.use("/api/languagues", languageRoutes);

export default app;
 