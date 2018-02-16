const linearSearchUnsorted = (arr, value)  => {
    let i = 0;
    const size = arr.length;
    for(; i < size; i++) {
        if(value === arr[i]) {
            return true;
        }
    }
    return false;
};

const linearSearchSorted = (arr, value) => {
    let i = 0;
    const size = arr.length;

    for (i = 0; i < size; i++) {
        if (value === arr[i]) {
            return true;
        }
        else if (value < arr[i]) {
            return false;
        }
    }
    return false;
};

// analyze
const binarySearch = (arr, value) => {
    let low = 0;
    let high = arr.length - 1;
    let mid = low;
    while( low <= high){
        mid = low + Math.floor((high - low) / 2);
        if(arr[mid] === value){
            return true;
        }
        else if (arr[mid] > value){
            low = mid + 1;
        }
        else{
            high = mid - 1;
        }

    }
    return false;
};

export {
    linearSearchUnsorted,
    linearSearchSorted,
    binarySearch
};