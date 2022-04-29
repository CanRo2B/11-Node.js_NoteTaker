// Todo: Require the util and fs needed
// Util is a built in feature of node like fs
const util = require("util");
const fs = require("fs");
// const express = require("express").Router;
const path = require("path");
// const {v1: uuidv1} = require('uuid');

// writeToFile
const readFromFile = util.promisify(fs.readFile);
// readToFile
const writeToFile = (destination, content) => 
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`/nData written to ${destination}`)
    )
// Todo: Require the uuid/vl package in your package json
const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeToFile(file, parsedData);
        }
    })
}

module.exports = {readFromFile, writeToFile, readAndAppend};
// class Store {

//     read() {

//     }

//     write() {

//     }

    // get the notes
    // add the notes
    // delete the notes (optional)
// }

// module.exports = new Store();