const onFulfilment = (result) => {
    console.log(result);
    console.log(`set up the table to eat tacos`)
}

const onRejection = (err) => {
    console.log(err);
    console.log(`start cooking pasta`)
}


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Bring tacos`);
    }, 5000);

})

const promises = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(`Not bringing tacos. Food truck not there`);
    }, 5000);

})
promise.then(onFulfilment)
promise.catch(onRejection)