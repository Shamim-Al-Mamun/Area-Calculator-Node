const express = require("express");
const app = express();
// const PORT = 3000;
const PORT = process.env.PORT;
const bodyParser = require("body-parser");
const userRouter = require("./routes/user.route");
const { redirect } = require("express/lib/response");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.use(express.static("public"));

//Home route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

//user route
app.use("/", userRouter);

let answer = "";
app.post("/circle", (req, res) => {
  const radius = req.body.radius;
  const area = Math.PI * radius * radius;
  answer = area;
  if (radius && Number(radius)) {
    if (Number.isInteger(area)) {
      res.render("answer", { area: `Area of circle: ${area}` });
    } else {
      res.render("answer", { area: `Area of circle: ${area.toFixed(2)}` });
    }
  } else {
    res.redirect("/circle");
  }
});
app.post("/square", (req, res) => {
  const length = req.body.length;
  const area = length * length;
  answer = area;
  if (Number(length)) {
    if (Number.isInteger(area)) {
      res.render("answer", { area: `Area of square: ${area}` });
    } else {
      res.render("answer", { area: `Area of square: ${area.toFixed(2)}` });
    }
  } else {
    res.redirect("/square");
  }
});
app.post("/triangle", (req, res) => {
  const height = req.body.height;
  const base = req.body.base;
  const area = 0.5 * height * base;
  if (Number(height) && Number(base)) {
    if (Number.isInteger(area)) {
      res.render("answer", { area: `Area of triangle: ${area}` });
    } else {
      res.render("answer", { area: `Area of triangle: ${area.toFixed(2)}` });
    }
  } else {
    res.redirect("/triangle");
  }
});
app.post("/rectangle", (req, res) => {
  const length = req.body.length;
  const breadth = req.body.breadth;
  const area = length * breadth;
  if (Number(length) && Number(breadth)) {
    if (Number.isInteger(area)) {
      res.render("answer", { area: `Area of rectangle: ${area}` });
    } else {
      res.render("answer", { area: `Area of rectangle: ${area.toFixed(2)}` });
    }
  } else {
    res.redirect("/rectangle");
  }
});

//bad URL
app.use((req, res) => {
  res.send(`Error 404, unknown URL`);
});
app.listen(PORT, (req, res) => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
