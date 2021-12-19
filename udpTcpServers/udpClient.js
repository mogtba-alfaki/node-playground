process.stdin.setEncoding("utf-8"); 


const dgram = require("dgram"); 
const udpClient = dgram.createSocket("udp4"); 
const serverInfo = { 
    port: 5000, 
    address: "localhost"
} 

// read data from the user 
process.stdin.on("data", (data) => { 
    if(data) { 
        sendToServer(data); 
    }
}); 

function sendToServer(data) { 
    udpClient.send(data, serverInfo.port, serverInfo.address, (err, bytes) => { 
        if(err) throw err; 
        console.log(bytes); 
    }); 
}