const fs=require('fs');

var addNote=(title,body)=>{
  var notes=[];
  var note={
    title,
    body
  };
  try{
    var noteString=fs.readFileSync('notes-dataa.json');
    notes=JSON.parse(noteString);
  }catch(e){

  }
  var duplicateNotes=notes.filter((note) => note.title === title);
  if(duplicateNotes.length==0){
    notes.push(note);
    fs.writeFileSync('notes-dataa.json',JSON.stringify(notes));
  }
};
var getAll=()=>{
  console.log('Getting all notes');
}
var readNotes=(title)=>{
  console.log('Reading '+title+' notes');
}
var removeNotes=(title)=>{
  console.log('Remove ',title,' notes');
}
module.exports={
  addNote,
  getAll,
  readNotes,
  removeNotes
}
