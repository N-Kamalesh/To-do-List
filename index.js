import express from "express";
import bodyParser from "body-parser";
import path from "path";
import {dirname} from "path";
import { fileURLToPath } from "url";
import date from "./date.js";

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const tasks = [];
const works = [];

app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({extended : true }));

app.get("/", (req, res) => {
    res.render(path.join(__dirname,"views/home.ejs"));
})
app.get("/today",(req, res) => {
    const day = date.getDate();
    res.render(path.join(__dirname,"views/today.ejs"),{day: day, tasks : tasks});
})

app.get("/work", (req, res) => {
    res.render(path.join(__dirname,"views/work.ejs"), {works : works});
})

app.post("/today", (req, res) => {
    let task = req.body.task;
    task = task.trim();
    if(task.length != 0)
        tasks.push(task);
    res.redirect("/today");
})

app.post("/work", (req, res) => {
    let work = req.body.work;
    work = work.trim();
    if(work.length != 0)
        works.push(work);
    res.redirect("/work");
})


app.listen(process.env.PORT || port, (req, res) => {
    console.log("Server running on port : ", port);
})