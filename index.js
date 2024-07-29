const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    fs.readdir("./files", (err, files) => { 
        if (err) {
            console.error(err);
            res.status(500).send("Internal server error");
            return;
        } 
        res.render("index", {files: files});
    });
});

app.get("/file/:filename", (req, res) => {
    fs.readFile(`./files/${req.params.filename}`, "utf-8", (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send("Internal server error");
            return;
        };
        res.render("show", { fileName: req.params.filename, fileContent: data })
    });
});

app.post("/submit", (req, res) => {
    fs.writeFile(`./files/${req.body.name.split(" ").join("")}.txt`, req.body.issue, (err) => {
        if (err) {
            console.error(err);
            return;
        } 
        res.redirect("/");
    });
});

app.get("/edit/:filename", (req, res) => {
    res.render("edit", {fileName: req.params.filename});
});

app.post("/edit/:filename", (req, res) => {
    fs.rename(`./files/${req.body.oldName}`, `./files/${req.body.newName}`, (err) => {
        if (err) {
            res.status(500).send("Failed to update filename");
            console.error(err);
            return;
        };
        res.redirect("/");
    });
});

app.listen(3001, () => {
    console.log("Server running at port 3001");
});