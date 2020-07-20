if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

var express = require("express");
var path = require("path");

var jobsRouter = require("./routes/jobs");

var app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.static(path.join(__dirname, "public/build")));

app.use("/jobs", jobsRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/build/index.html"));
});

app.listen(
  process.env.PORT,
  console.log("Server start on port " + process.env.PORT)
);
