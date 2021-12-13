const path = require("path"); 
const fs = require("fs"); 
const sharp = require("sharp"); 

/* 
 behaviour :  
(image Input) ->  |readableStream| -> 
 - (transformWritableStream - resizing - transform/readableStream) - 
 -> |writableStream| -> (image output) 
*/

const readableStream = fs.createReadStream(path.join(__dirname, "./streams.png")); 
const writableStream = fs.createWriteStream(path.join(__dirname, "./output.png"));  

const transform = sharp().resize({ 
    width: 200, 
    height: 200, 
    fit: sharp.fit.cover, 
    position: sharp.strategy.entropy, 
}) 

readableStream.on("open", () => { 
    console.log("image opened ..")
}) 


readableStream.on("end", () => { 
    console.log("end ...")
})

readableStream.on("error", (err) => {  
    console.log("error")
    throw err; 
})

// piping the image from the readable stream to the transform for resizing and finaly to the writableStream 

readableStream.pipe(transform) 
transform.pipe(writableStream); 