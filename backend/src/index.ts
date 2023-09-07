import bodyParser from "body-parser";
import { config } from "../config/config";
import sequelize from "./database/database";
import userRouter from "./routes/userRoutes";
import cors from "cors";
import passport from "./middleware/passportMiddleware";
import session from "express-session";

const express = require("express");
require("dotenv").config();

sequelize.sync();

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", userRouter);

app.listen(config.PORT.port, () => {
  console.log(`Server is running on PORT ${config.PORT.port}`);
});
