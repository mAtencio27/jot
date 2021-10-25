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
//GET ALL NOTES
app.get("/api/allnotes", async(req,res) => {
    const notes = await db.table("notes")
    res.json(notes)
})
//GET ONE NOTE
app.get("/api/onenote", async(req,res) => {
    const notes = await db.table("notes")
    const noteId = parseInt(req.body.id)
    const singleNote = notes.filter((note)=> noteId === note.id)
    res.json(singleNote)
})
//POST A NOTE
app.post("/api/add", async(req,res) => {
    const addNote = req.body.note
    const obj = {"note": addNote}
    await db.table("notes").insert(obj)
    res.json(`added to Notes!`)
})
//DELETE A NOTE 
app.delete("/api/delete", async(req,res) => {
    const deleteId = parseInt(req.body.id)
    const notes = await db.table("notes")
    const foundItem = notes.filter((note) => deleteId === note.id)
    await db.table("notes").where("id",foundItem[0].id).delete()
    res.json(`Note with ID number ${deleteId} has been deleted`)
})
//EDIT A NOTE
//{"id":"9", "note":"lets patch this bad boy note up. ITS WORKING!!!"}
app.patch("/api/patch", async(req,res) => {
    const patchId = parseInt(req.body.id)
    const patchNote = req.body.note
    //console.log(patchId, patchNote) OK
    const notes = await db.table("notes")
    //console.log(notes) OK
    const editNote = notes.filter((note) => patchId === note.id)
    //console.log(editNote)
    await db.table("notes").where("id", editNote[0].id).update({note:patchNote})
    res.json("all patched up")
})

/*************************************************************************** */

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
  });
  
  module.exports = app;
