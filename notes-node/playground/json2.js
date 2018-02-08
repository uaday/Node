var fs=require('fs');
var note={
  title:'title2',
  description:'description2'
};
var noteString=JSON.stringify(note);
fs.writeFileSync('Note2.json',noteString);

var noteResult=fs.readFileSync('Note2.json');
var orginalNote=JSON.parse(noteResult);
console.log(typeof orginalNote);
console.log(orginalNote.title);
