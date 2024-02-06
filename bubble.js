const bubblesort = (arr) =>{
    let len = arr.length;
    for(let i=0; i< len; i++){
        for(let j=0 ;j < len ; j++) {
            if (arr[j] > arr[j+1]) { 
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
             }
        }
    }
    return arr; 
}
 let arr = [45,23,67,89,12,34,76];
 console.log("bubblesort arr is :",arr);