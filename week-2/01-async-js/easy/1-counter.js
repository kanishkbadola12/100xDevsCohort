/* Create a counter in JavaScript
try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second */

let counter = 0;

setInterval(() => {
  counter++;
  console.log(counter);
}, 1000)