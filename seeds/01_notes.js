const fs = require("fs");


exports.seed = function(knex) {
  // Deletes ALL existing entries
  const allNotes = getNotes()
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert(allNotes);
    });
};

function getNotes(){
  const notes = JSON.parse(fs.readFileSync("./data/notes.json"));
  const returnNotes = []
  for(const note of notes){
    returnNotes.push({"note":note})
  }
  return returnNotes
}
