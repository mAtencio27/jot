const express = require("express");
const path = require("path");
const db = require("./knex.js")
const cors = require("cors")

const app = express()

//MIDDLEWARE
// convert to json for REST
app.use(express.json());
// will allow access 
app.use(cors({
    origin: '*'
}));

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));

/*************************************************************************** */

app.get("/api/hello", async(req,res) => {
   res.json("hello this app is jot")
})

app.get("/api/allnotes", async(req,res) => {
    const notes = await db.table("notes")
    res.json(notes)
})

/*************************************************************************** */

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
  });
  
  module.exports = app;
