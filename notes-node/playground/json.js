// var obj={
//   name:'sudipta'
// };
// var stringObj=JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
// var string='{"name":"sudipta","age":23}';
// var strObj=JSON.parse(string);
// console.log(typeof strObj);
// console.log(strObj);

// var fs =require('fs');
//
// var orginalNote={
//   title:'Some Title',
//   body:'Some body'
// };
//
// var orginalNoteString=JSON.stringify(orginalNote);
//
// fs.writeFileSync('Note.json',orginalNoteString);
//
// var Noteobj=fs.readFileSync('Note.json');
// var note=JSON.parse(Noteobj);
// console.log(typeof note);
// console.log(note.title);

var fs = require('fs');

var orginalNote={
  title:'Some Title',
  body:'Some Body'
};
var orginalNoteString=JSON.stringify(orginalNote);

fs.writeFileSync('Note1.json',orginalNoteString);
var Noteobj=fs.readFileSync('Note1.json');
var note=JSON.parse(Noteobj);
console.log(typeof note);
console.log(note.title);
