// const greet = async() => {

//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Hello"), 1000)
//     });
//     let result = await promise;
//     console.log(result);
// }
// console.log(greet);
const greet = async() => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Hello"), 1000)
    });
    let result = await promise;
    console.log(result);
}
greet()

// Sequential execution

const resolvehello = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`hELLO`);
        }, 2000);
    })
}

const resolvehelloworld = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`world`);
        }, 1000);
    })
}

const sequentialstart = async() => {
    const hello = await resolvehello();
    console.log(hello);

    const world = await resolvehelloworld();
    console.log(world);
}
sequentialstart()

//concurrent

const concurrentstart = async() => {
    const hello = resolvehello();
    const world = resolvehelloworld();
    console.log(await hello);
    console.log(await world)
}
concurrentstart()

//parallel

const parallel = () => {
    Promise.all([
        (async() => console.log(await resolvehello()))(),
        (async() => console.log(await resolvehelloworld()))(),
    ])
}

parallel()