const fs = require('fs');

const book = {
    title: 'Assim falou Zaratrusta',
    author: 'Nietzsche'
};

const bookJSON = JSON.stringify(book);

fs.writeFileSync('01-json.json', bookJSON);