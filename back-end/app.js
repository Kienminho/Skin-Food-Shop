const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const Product = require("./models/Product");
const Category = require("./models/Category");
const CapacityPrice = require("./models/CapacityPrice");
require("dotenv").config();
const app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: "my-key",
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 60 * 60 * 24 * 1000,
    },
  })
);
app.use(express.static("public"));
app.use(cookieParser());

//routes
const apiRouter = require("./router/userRouter");
app.use("/api", apiRouter);
app.listen(process.env.PORT, () => {
  console.log("Server is running on: http://localhost:" + process.env.PORT);
});
