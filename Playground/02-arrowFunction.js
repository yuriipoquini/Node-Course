const square1 = function (x){
    return x * x
};

const square2 = (x) => {
    return x * x
};

const square3 = (x) => x * x;

console.log(square1(1));
console.log(square2(2));
console.log(square3(3));

const event = {
    name: 'Birthday party',
    guestList: ['Yuri', 'Miguel', 'Malu', 'Tatiana'],
    printGuestList() {
        console.log('Guest list for', this.name);

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name);
        })
    }
};

event.printGuestList()

