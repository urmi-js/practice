const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            start = mid + 1;
        }else{
            end = mid - 1;
        }    
    }
    return -1;
}
 const arr = [10, 20, 30, 40, 50, 60, 70, 80];
 console.log("Binary search is: ",binarySearch(arr,  60));