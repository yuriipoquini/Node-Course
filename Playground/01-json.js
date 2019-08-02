const fs = require('fs');

//const book = {
//    title: 'Assim falou Zaratrusta',
//    author: 'Nietzsche'
//};

//const bookJSON = JSON.stringify(book);

//fs.writeFileSync('01-json.json', bookJSON);


const dataBuffer = fs.readFileSync('01-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = "Yuri";
data.age = 21;

const newData = JSON.stringify(data)
fs.writeFileSync('01-json.json', newData);