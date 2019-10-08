console.log('Alo galera, o JS ta OK!!');

const weatherForm = document.querySelector('form');
const iptValue = document.querySelector('input').value;

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();


    fetch(`http://localhost:3000/weather?address=${iptValue}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                console.log(data.location);
                console.log(data.forecast);
            }
        });
    });

})