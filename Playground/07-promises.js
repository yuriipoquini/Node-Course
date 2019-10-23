const doWorkPromise = new Promise((rejected, resolve) => {
    resolve([1, 5, 6])
}, 2000);

doWorkPromise.then((result) => {
    console.log(result);

}).catch((error) => {
    console.log(error);

});