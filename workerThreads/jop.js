const {parentPort, workerData} = require("worker_threads");
const {generateFebonacci} = require("../heavyCalculations")


parentPort.postMessage(generateFebonacci(workerData.number))

