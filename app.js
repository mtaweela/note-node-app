const fs = require('fs');
const yargs = require('yargs');

const notes = require('./notes');

const titleOptions = {
    descripe: 'Title of note',
    demand: true,
    alias: 't'
}


const bodyOptions = {
    descripe:'Body of note', 
    demand: true,
    alias: 'b'
}
var argv = yargs
    .command('add', 'add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'list all notes')
    .command('read', 'read a note', {
        title: {
            descripe: 'Title of note',
            demand: true,
            alias: 't'
        }
    })
    .command('remove', 'remove a note', {
        title: titleOptions
    })
    .help()
    .argv;
var command = argv._[0];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('note created');
        notes.logNote(note);
    } else {
        console.log('note title taken');
    }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach(note => notes.logNote(note));
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log('note created');
        notes.logNote(note);
    } else {
        console.log('note does not exist');
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found'
    console.log(message);
} else {

}