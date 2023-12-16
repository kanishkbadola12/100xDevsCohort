/* File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman 
``` */

const fs = require("fs");


fs.readFile('a.txt', 'utf-8', (err, data) => {
  const dataArr = data.split("");
  for (let i = 0; i < dataArr.length - 1; i++) {
    if (dataArr[i] === " " && dataArr[i+1] === " ") {
        dataArr.splice(i, 1);
        i--;
    }
  }
  
  const cleanedData = dataArr.join('');
  fs.writeFile('a.txt', cleanedData, () => {});
});

