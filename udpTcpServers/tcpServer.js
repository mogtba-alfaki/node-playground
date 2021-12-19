const net = require("net"); 

const tcpServer = net.createServer(socket => { 
    socket.write("connected to tcp server ..."); 
    socket.on("data", data => {   
        const clientMessage = data.toString(); 
        const clientMessageBytes = data.buffer.byteLength; 
        console.log(`client message: ${clientMessage} and it's ${clientMessageBytes} bytes`)
    })    
    
 socket.on("error", err => { 
     throw err; 
 }) 
}); 

tcpServer.listen(5000); 