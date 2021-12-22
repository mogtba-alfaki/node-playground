const http2 = require("http2"); 
const serverUrl = "https://localhost:5000"; 
const {Http2ServerRequest} = require("http2")
const requestOptions = { 
    ":method": "GET", 
    ":path": "/",  
}; 

const client = http2.connect(serverUrl); 
const req = client.request(requestOptions) 
client.
req.on("response", headers => { 
    console.log(headers); 
}); 

req.on("data", chunk => { 
    console.log("______ Data Chunck _____"); 
    console.log(chunk); 
}); 


req.on('end', () => client.destroy());

