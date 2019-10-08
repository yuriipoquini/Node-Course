console.log('Alo galera, o JS ta OK!!');

const weatherForm = document.querySelector('form');
const weatherIpt = document.querySelector('input');
const msg1 = document.querySelector('#msg-1');
const msg2 = document.querySelector('#msg-2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();


    let iptValue = weatherIpt.value;

    fetch(`http://localhost:3000/weather?address=${iptValue}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                msg1.textContent = data.error;

                msg2.textContent = '';
            } else {
                msg1.textContent = data.location;
                msg2.textContent = data.forecast;
            }
        });
    });

})