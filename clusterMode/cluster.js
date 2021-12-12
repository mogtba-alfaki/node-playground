/* 
    cluster mode is used to enhance node performance and try to make it more responsive 
    when dealing with cpu intensive operations by forking childrens or replicas of the  
    event loop to serve other request while another fork is dealing with the cpu operations 

*/

const cluster = require("cluster"); 
const os  = require("os");  
const http = require("http"); 
const { factorialMyHugeArray } = require("../heavyCalculations");

if(cluster.isMaster) {  
    const cpuCores = os.cpus().length;  
    console.log(cpuCores); 
    for(let i = 0; i < cpuCores; i++) { 
        cluster.fork(); 
    } 
} else { 
   http.createServer((request, response) => {  
       if(request.url == "/fast") { 
           return response.end("fast!")
       } else if(request.url == "/slow") {  
           // simulate heavy cpu operation 
           factorialMyHugeArray(150);   
           console.log("calculation done ..")
           return response.end("slow"); 
       } 
       response.end("0"); 
   }).listen(5000); 
}