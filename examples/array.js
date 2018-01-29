


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

export {
    sumArray,
    sequentialSearch
};