
//esta clase implementa el algoritmo  'Ordenamiento por selección' 
// https://es.wikipedia.org/wiki/Ordenamiento_por_selecci%C3%B3n
class SortNumberAsc{

  //metodo para intercambiar 2 elementos de posicion en un array
  static swap(array, firstIndex, secondIndex) {
      const temp = array[firstIndex];
      array[firstIndex] = array[secondIndex];
      array[secondIndex] = temp;
      return array;
  }

 
 //metodo para obtener el valor menor  de un array
  static indexOfMinimum(array, startIndex) {
      // Set initial values for minValue and minIndex,
      // based on the leftmost entry in the subarray:  
      let minValue = array[startIndex];
      let minIndex = startIndex;

      // Loop over items starting with startIndex, 
      // updating minValue and minIndex as needed:

      for(let i=minIndex ; i < array.length;i++){
          if(array[i] <  minValue){
              minValue = array[i];
              minIndex  =  i;
          }

      }

      return minIndex;
  }


//metodo para ordenar los numeros de menor mayor
 static selectionSort(array){
    
     const arrayLen  =  array.length;
     for(let i=0; i < arrayLen;i++){
          const minIndex =  SortNumberAsc.indexOfMinimum(array,i)
          array = SortNumberAsc.swap(array, i, minIndex) 
     }

     return array;
  };


}

 const array =   [50,40,1,200,2,3];

//obtenemos los numeros ordenados de menor a mayor
 const sortedNumbers = SortNumberAsc.selectionSort(array);
 
 console.log(sortedNumbers);
 