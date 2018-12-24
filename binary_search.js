


const binarySearch = (array, number) =>{
	let tries = 1;
  let min = 0;
  let max = array.length - 1;
 
  while(min <= max){
    const  guess = Math.floor( (min + max ) / 2 );
    const  el = array[guess];
    if( el === number){
				console.log(tries, "intentos requeridos para el numero", el)
      	return guess; 
    }else if(el < number){
     	 	min =   guess  + 1;       
    }else{
      	max =  guess - 1;    
    }		
		
    tries+= 1;
  }
  
 return -1;
}


const data = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
 
 if(binarySearch(data, 29)> 0){
 		console.log("si existe")
 }else
  	console.log("NO existe")
