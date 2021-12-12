const http = require("http") ;
const {Worker, workerData, isMainThread} = require("worker_threads")

const server = http.createServer((request, response) => { 
    switch(request.url) { 
        case "/fast":  
            response.end("1")
            console.log("fast response sent !")
            break; 
        case "/slow": 
        if(isMainThread) { 
            const worker = new Worker("./workerThreads/jop.js", {workerData:{number: 50}});
            worker.on("message", (data) => {
                console.log("message rescevied"); 
                console.log("message from the thread: ", data)
                response.end("1"); 
            })  
        
            worker.on("error", (err) => { 
                throw err
            })
        
            worker.on("exit", () => { 
                console.log("exiting. ....")
            })
        }
    }
}).listen(5000); 