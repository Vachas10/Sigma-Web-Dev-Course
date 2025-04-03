const  fs = require("fs");
// console.log(fs);
console.log("starting");
// fs.writeFileSync("harry.txt","harry is a great guy")
fs.writeFile("harry2.txt","harry is a great guy2",()=>{
    console.log("Done");
    // fs.readFile("harry2.txt",(error,data)=>{
    //     console.log(data.toString());
        
    // })
})
fs.appendFile("harry.txt"," Naya text Shuru",()=>{
    console.log("Appended successful");
    fs.readFile("harry.txt",(error,data)=>{
        console.log(data.toString());
        
    })
})
console.log("ending");

