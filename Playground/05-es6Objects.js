//Shorthand Property ES6
var cat = 'miau';
var dog = 'au au';
var duck = 'quack';

const animals = {
    cat,
    dog,
    duck
}

//it is the same thing of:

const animals2 = {
    cat: cat,
    dog: dog,
    duck: duck
}



//DESCTRUTURING 

const product = {
    label: 'Notebook',
    price: 100,
    stock: 20
}

// const label = product.label
// const stock = product.stock

const {label, stock, rating = 5} = product;

const transaction = (type, {label, price, stock}) => {
    console.log(type);
    console.log(label + ' ' + stock + ' ' + price);
}

transaction('order', product);
