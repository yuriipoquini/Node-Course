const yargs = require('yargs');
const notes = require('./notes.js');

//Customize yargs version

yargs.version('1.1.0');

console.log(notes.getNotes());
//Creating new commands
yargs.command({
    command: 'add',
    describe: 'Adiciona uma Nota',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },

        body: {
            describe:'Note body',
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body);
    }    
});

yargs.command({
    command: 'remove',
    describe: 'Remove uma nota',    
    builder: {
        title: {
            describe: 'title that will be removed!',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
});

yargs.command({
    command: 'read',
    describe: 'Ler uma Nota',
    builder: {
        title: {
            describe: 'title to be readed',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'Listar as Notas',
    handler() {
        notes.listNotes();
    }
});

yargs.parse();