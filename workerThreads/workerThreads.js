// const {Worker, isMainThread, parentPort} = require("worker_threads");  


// const worker = new Worker("./workerThreads/worker.js", {workerData:{num: 10}});

// worker.on("message", (data) => {
//     console.log("message rescevied"); 
//     console.log(data)
// })  

// worker.on("error", (err) => { 
//     throw err
// })

// worker.on("exit", () => { 
//     console.log("exiting. ....")
// })
//     // if(isMainThread) { 
//     //     const thread = new Worker(__filename); 
//     //     thread.on("message", (data) => { 
//     //         return data; 
//     //     }) 
//     //     thread.on("error", (err) => { 
//     //         throw err
//     //      })
//     // } else { 
//     //     const result = heavyTask.factorialMyHugeArray(100); 
//     //     return result; 
//     // }
