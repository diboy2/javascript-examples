const factorial = (n) => {
    if(n <= 1){
        return 1;
    }
    return n  * factorial(n - 1);
};

const towerOfHanoi = (num, src, dst, temp) => {
    if (num < 1) {
        return;
    }
    towerOfHanoi(num - 1, src, temp, dst);
    console.info("Move " + num + "disk from peg " + src + " to peg " + dst);
    towerOfHanoi(num - 1, temp, dst, src);
};


const fibonnaci = (n) => {
    if (n <= 1) {
        return n;
    }

    return fibonnaci(n - 1) + fibonnaci(n - 2);
};

const BinarySearchRecursive = (arr, value) => {
    return BinarySearchRecursiveUtil(arr, 0, arr.length -1, value);
};

const BinarySearchRecursiveUtil = (arr, low, high, value) => {
    if(low > high) {
        return -1;
    }

    const mid = low + Math.floor((high - low) / 2);

    if(arr[mid] === value){
        return mid;
    }
    else if (arr[mid] <  value) {
        return BinarySearchRecursiveUtil(arr, mid + 1, high, value);
    }
    else {
        return BinarySearchRecursiveUtil(arr, low, mid - 1, value);
    }
};
export {
    fibonnaci,
    BinarySearchRecursive
};

