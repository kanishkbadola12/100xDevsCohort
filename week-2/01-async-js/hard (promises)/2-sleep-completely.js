/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    if (n > 0) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, milliseconds)
        })
    } else {
        return new Promise((resolve, reject) => {
            reject('Please provide a valid input')
        });
    }
    
  };

module.exports = sleep;
