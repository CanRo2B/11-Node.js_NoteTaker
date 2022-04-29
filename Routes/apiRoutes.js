// Todo: Require the router and db items needed (video 17:35)
const { application } = require("express");
const path = require("path");
const api = require("express").Router();
const { readFromFile, readAndAppend } = require("../db/store");
const uuid = require("../db/uuid");
const router = require("./htmlRoutes");

// Get all the notes and send them to the left side of the site
api.get("/notes", (req, res) => {
    console.info(`Notes received`);
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

api.post("/notes", (req, res) => {
    console.info("Notes added");
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text
        };

        readAndAppend(newNote, "./db/db.json");
        res.json("Note added");
    } else {
        res.error("Error in creating Note")
    }
    
});


module.exports = api;