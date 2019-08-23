const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'Your notes...'


const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);

        console.log('New note Added!');

    } else {

        console.log('Note title taken!');
    }

};

const removeNotes = (title) => {
    const notes = loadNotes();
    const removedNote = notes.filter((note) => note.title !== title);

    if (notes.length > removedNote.length) {

        console.log(chalk.green.inverse('Note Removed!!'));
    }
    else {

        console.log(chalk.red.inverse('Note do not found!'));
    }

    saveNotes(removedNote);

};

const listNotes = () => {
    const notes = loadNotes()

    notes.forEach(note => {
        console.log(note.title);
    });
};

const readNotes = (title) => {
    const notes = loadNotes();
    const readNote = notes.find((note) => note.title === title);

    if (note) {
        console.log(readNote.body);
    }else{
        console.log('Note not found!');
    }
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }
};

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
};




