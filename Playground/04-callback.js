setTimeout(() => {
    console.log('2 Segundos para o fim do mundo')
}, 2000);

const names = ['Yuri', 'Maria Luiza', 'Miguel', 'Tatiana'];

const shortNames = names.filter((name) => {
   return name.length <= 4;
});

const geocode = (x, y, callback) => {
    setTimeout(() => {
        const data = x + y

        callback(data);
    }, 2000);
}

geocode(1, 4, (data) => {
    console.log(data);
});