


const sumArray = (arr) => {

    return arr.reduce((a,b) => {
        return a + b;
    }, 0);
};

const sequentialSearch = (arr, value) => {
    var i;
    for(i = 0; i < arr.length; i++){
        if(arr[i] === value){
            return i;
        }
    }
    return undefined;
};

const binarySearch = (arr, value) => {
    var arrayLength = arr.length;
    var low = 0;
    var high = arrayLength - 1;

    while(low <= high){
        let mid = low + Math.floor((high - low) / 2);

        if(arr[mid] === value){
            return mid;
        }

        if(arr[mid] < value){
            low = mid + 1;
        }
        if(arr[mid] > value){
            high = mid - 1;
        }
    }
    return -1;
};

export {
    sumArray,
    sequentialSearch,
    binarySearch
};