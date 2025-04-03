const fs = require("fs")
const path = require('path')
const mv = require('mv');




fs.readdir('./', (err, files) => {
  files.forEach(file => {
    
    let a = path.extname(`${file}`).slice(1);
    
    const directoryPath = `./${a}`;
   
    if (!fs.existsSync(directoryPath)) {
      
  
    fs.promises.mkdir(directoryPath)
    .then(() => console.log(`Directory '${directoryPath}' created.`))
    .catch(err => console.error(`Error creating directory: ${err.message}`));
  }
    
    mv(`${file}`, `${directoryPath}/${file}`, function (err) {
        if (err) return console.error(err);
        console.log("success!");
      });

    // const joinedPath = path.join(`./${a}`, `${file}`);
    // console.log(joinedPath);
  });
});



