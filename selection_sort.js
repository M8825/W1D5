function selectionSort(array){
  
}

function smallest(array) {
  let smallest_idx = array[0];
  let smallets_i = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > smallest_i){
      smallest_i = i;
      smallest_idx = array[i];
    }
  }
  
  return smallest_i;
}