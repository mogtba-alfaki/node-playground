const dgram  = require("dgram"); 
const { createReadStream} = require("fs");

const udp = dgram.createSocket("udp4"); 
const port = 5000; 
const imagePath = require("path").join(__dirname, "./nextfunctionstack.png")


udp.on("listening", () => { 
    console.log(`server is listening on address ${udp.address().address} port : ${port}`); 
});

udp.on('message', (message, info) => {
    console.log(`client said : ${message}`)  
    const imageReadableStream = createReadStream(imagePath); 
    imageReadableStream.on("data", (chunk) =>  {
        udp.send(chunk, info.port, "localhost", (err, bytes) => { 
            if(err) throw err;  
        }); 
    }); 
  });

udp.on("error", (err) => { 
    console.log(err)
}); 

udp.bind(port) 
