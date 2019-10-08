console.log('Alo galera, o JS ta OK!!');

fetch('http://localhost:3000/weather?address=ibiuna').then((response) => {
    response.json().then((data) => {
        console.log(data.location);
        console.log(data.forecast);
    });
});