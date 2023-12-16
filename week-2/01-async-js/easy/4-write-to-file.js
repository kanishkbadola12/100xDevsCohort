/* Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks. */

const fs = require('fs');
const data = 'File is edited by Kanishk Badola';

// Write data to the file by deleting existing data and writing new data
fs.writeFile('a.txt', data, () => {
    console.log('File is written successfully:')
    fs.readFileSync('a.txt', 'utf-8', (err, data) => {
        console.log(data)
    });
})

// Write data to the file by writing new data and appending existing data to new data
fs.appendFile("a.txt", data, () => {
    console.log("File is written successfully:");
    fs.readFile("a.txt", "utf-8", (err, data) => {
      console.log(data);
    });
  });