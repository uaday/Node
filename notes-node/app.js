console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.command('add','Add a new node',{
  title:{
    description:'Title of note',
    demand:true,
    alias: 't'
  },
  body:{
    description:'Body of note',
    demand:true,
    alias:'b'
  }
}).help().argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Note title taken');
  }
} else if (command === 'list') {
  var allNotes=notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note)=>notes.logNote(note));
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('Note found');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}
