/* Counter without setInterval
Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck. */

let counter = 0;

function callSetTimeout() {
  setTimeout(() => {
    counter++;
    console.log(counter);
    callSetTimeout();
  }, 1000);
}

callSetTimeout();