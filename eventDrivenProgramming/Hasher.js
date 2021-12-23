const {EventEmitter} = require("events")
const fs = require("fs"); 
const {pbkdf2} = require("crypto"); 
const stream  = require("stream"); 

class Hasher extends EventEmitter { 
    constructor({hashFunction, encoding, saltFilePath, outputFilePath}){  
        super(); 
        this.encoding = encoding; 
        this.hashFunction = hashFunction; 
        this.saltString = fs.readFileSync(saltFilePath).toString();  
        this.outputFile = fs.createWriteStream(outputFilePath);    
    }  
    
    async open() {   
        this.on("startHashing", (string) => {  
            console.log("emited ...")
            pbkdf2(string, this.saltString, 100000, this.encoding, this.hashFunction, (err, derivedKey) => { 
                if(err) throw err;  
                const readableStream = new stream.Readable(); 
                readableStream.push(derivedKey.toString("hex")); 
                readableStream.push(null);  
                readableStream.pipe(this.outputFile); 
            }); 
            this.emit("hashCreated", {hashFile: this.outputFile.path});
        })
    } 

}; 

module.exports = Hasher; 