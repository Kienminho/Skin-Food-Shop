const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
require("dotenv").config();
const app = express();

//middleware
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
app.use(cookieParser());

app.listen(process.env.PORT, () => {
  console.log("Server is running on: http://localhost: " + process.env.PORT);
});
