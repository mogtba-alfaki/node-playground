const heavyTask = require("../heavyCalculations")

process.on("message", message => {  
    const result = heavyTask.factorialMyHugeArray(message.number); 
    process.send(result); 
    process.exit();   
})