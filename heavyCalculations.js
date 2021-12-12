

exports.factorialMyHugeArray = (arraySize) => { 
  const myArray = createMyRandomArray(arraySize);  
  for(let num of myArray) { 
      factorialize(num); 
  } 
  return; 
} 


exports.generateFebonacci = (number) => { 
    if(number == 0) return 0; 
    if(number ==1) return 1; 

    return this.generateFebonacci(number -1) + this.generateFebonacci(number -2)
}


function createMyRandomArray(size) { 
    let arr = []; 
    for(let i = 0; i < size; i ++) {  
        arr.push(Math.floor(Math.random() * (100000000 - 1000000) + 1000000)); 
    }   
    return arr; 
}



function factorialize(num) {
    var result = num;    
    if (num === 0 || num === 1) 
    return 1; 
    while (num > 1) { 
        num--;
      result *= num;
    } 
    return result; 
}


