import express from "express";
import http from "http";
import cors from "cors";
import path from "path";

const app = express();

app.use(cors());
app.use(express.static(path.join(process.cwd(), "public")));

app.set("x-powered-by", false);
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

app.get("/", (req, res, next) => {
  res.render("index");
});

app.get("/index", (req, res, next) => {
  res.render("index");
});

app.get("/:static", (req, res, next) => {
  res.render(req.params.static);
});

const server = http.createServer(app);
server.listen(3000, () => {
  console.log("Server started");
});
