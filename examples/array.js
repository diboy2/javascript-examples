


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

const reverseArray = (arr, start, end ) => {
    if((arr != null && arr instanceof Array) && (typeof start === 'number') && (typeof end === 'number')) {
        for (let i = start, j = end; i < j; i++, j--){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    } else {
        throw new Error("invalid overload");
    }
};

const rotateArray = (a, n, k) => {
    reverseArray(a, 0, k - 1);
    reverseArray(a, k, n - 1);
    reverseArray(a, 0, n - 1);
};

export {
    sumArray,
    sequentialSearch,
    binarySearch,
    rotateArray
};