const yargs = require('yargs');

//Customize yargs version

yargs.version('1.1.0')

//Creating new commands
yargs.command({
    command: 'add',
    describe: 'Adiciona uma Nota',
    builder: {
        title: {
            describe: 'title',
            demandOption: true,
            type: 'string'
        },

        body: {
            describe:'Note body',
            demandOption: true,
            type: 'string'
        }

    },
    handler: function(argv) {
        console.log('Titulo: ' + argv.title + '\nBody: ' + argv.body);
    }    
})

yargs.command({
    command: 'remove',
    describe: 'Remove uma nota',
    handler: function(){
        console.log('Remove uma Nota');
    }
})

yargs.command({
    command: 'read',
    describe: 'Ler uma Nota',
    handler: function () {
        console.log('Ler uma Nota');
    }
})

yargs.command({
    command: 'list',
    describe: 'Listar as Notas',
    handler: function () {
        console.log('Listar as Notas');
    }
})

yargs.parse();