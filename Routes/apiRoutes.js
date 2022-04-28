// Todo: Require the router and db items needed (video 17:35)
const path = require("path");
const api = require("express").Router();
const store = require("../db/store")

// Todo: Set up a get/post/delete methods as responses to the database
api.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
})

api.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
// Export the router
module.exports = api;
