const childProcess = require("child_process"); 
const heavyTask = require("../heavyCalculations")
const http = require("http");  


const server = http.createServer((req, res) => { 
    switch(req.url) {  
        case "/fast": 
            res.end("fast response !!"); 
            break; 
        case "/heavyTask": 
            heavyTask.factorialMyHugeArray(100); 
            res.end("calculation done and we blocked the event loop :( ..");
            break; 
        case  "/heavyTaskWithChildProcess": 
            const child = childProcess.fork(require("path").join(__dirname, "childProcessTask.js")); 
            child.send({"number": 100}); 
            child.on("message", (message) => {  
                console.log(message)
                res.end("calculation done without blocking the event loop :)"); 
            });
            break; 
        default:  
            res.end(`
                our  routes are:  
                /fast -> for fast response 
                /heavyTask -> for heavy task demo without child process 
                /heavyTaskWithChildProcess -> for heavy task demo using child process
            `)
    }
});  


server.listen(5000, () => { 
    console.log("server is listening on port 5000")
})