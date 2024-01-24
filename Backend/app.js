var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
var TaskRouter = require("./routes/TaskRoute");
var moongose = require("mongoose");
const { default: mongoose } = require("mongoose");
var app = express();
app.use(express.json());
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/app", TaskRouter);
app.use("/app", TaskRouter);
app.use("/app", TaskRouter);
app.use("/app", TaskRouter);
app.use("/app", TaskRouter);
mongoose.connect(process.env.DB_URL);
module.exports = app;
