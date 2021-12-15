const http2 = require("http2"); 
const fs = require("fs"); 

const certificationData = { 
    privateKey: fs.readFileSync("privateKey.pem"),
    certification: fs.readFileSync("certification.pem")
}
const server = http2.createSecureServer({ 
    "key": certificationData.privateKey, 
    "cert": certificationData.certification
});  
 
 

server.on("session", (session) => { 
    console.log("______ Session Started _______")
})


server.on("stream", (stream, headers) => {     
    server.getConnections((err, number) => {  
        console.log(number); 
    })
    stream.respond({ 
        "content-type": "application/json", 
        "status": 200, 
    }); 
    
    const response = JSON.stringify({ 
        "data": "hello, using http2 !"
    }) 

    stream.end(response); 
    server.close((err) => { 
        console.log("connection closed ...")
    })
});  



server.listen(5000, () => { 
    console.log("http2 server is listening ...")
})