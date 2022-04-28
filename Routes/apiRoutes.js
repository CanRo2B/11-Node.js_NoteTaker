// Todo: Require the router and db items needed (video 17:35)
const path = require("path");
const api = require("express").Router();
// const store = require("../.db.json")

// Todo: Set up a get/post/delete methods as responses to the database
api.get("./api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "db.json").then((data) => res.json(JSON.parse(data))));
});

api.post("./api/notes", (req, res) => {
    data.db.push(req.body);
});

api.delete("./api/notes", (req,res) => {
    data.db.length = 0,
    res.send("Note not created");
});

module.exports = api