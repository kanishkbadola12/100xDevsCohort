/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    if (n > 0) {
        n = n * 1000;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, n)
        })
    } else {
        return new Promise((resolve, reject) => {
            reject('Please provide a valid input')
        });
    }
}

module.exports = wait;
