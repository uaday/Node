const notes=require('./notes1.js');
const _=require('lodash');
const yargs=require('yargs');
const argv=yargs.argv;
var command=argv._[0];
console.log('Command',command);
console.log('process',process.argv);
console.log('yargs',argv);

//                                  --------------()--------------
if(command==='add'){
  notes.addNote(argv.title,argv.body);
}else if(command==='list'){
  notes.getAll();
}else if(command==='read'){
  notes.readNotes(argv.title);
}else if(command==='remove'){
  notes.removeNotes(argv.title);
}else {
  console.log('Command not found!!');
}
