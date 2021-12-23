const Hasher = require("./Hasher"); 

const myHash = new Hasher({ 
    hashFunction: "sha512", 
    encoding: 32, 
    saltFilePath: "./salt.txt", 
    outputFilePath: "./hash.txt"
});   
let stringToHash = "hello, world"; 

myHash.open();  

myHash.emit("startHashing",  stringToHash); 

myHash.on("hashCreated", (hash) => {  
    console.log("hash created check the file: ")
    console.log(hash.hashFile); 
})