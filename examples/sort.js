
const more = (value1, value2) => {
    return value1 > value2;
};

class BubbleSort {
    constructor(array) {
        this.array = array;
    }

    sort() {
        const size = this.array.length;
        let i;
        let j;
        let temp;
        for(i = 0; i < size - 1; i++){
            for (j = 0; j < size - i - 1; j++){
                if(more(this.array[j], this.array[j + 1])){
                    temp = this.array[j];
                    this.array[j] = this.array[j + 1];
                    this.array[j + 1] = temp;
                }
            }
        }
    }
}

class InsertionSort {
    constructor(array) {
        this.array = array;
    }

    sort(){
        let i;
        let j;
        const size = this.array.length;
        let temp;
        for(i = 1; i < size; i++) {
            j = i;
            while(j > 0 && this.array[j] < this.array[j - 1]) {
                temp = this.array[j];
                this.array[j] = this.array[j - 1];
                this.array[j - 1] = temp;
                j--;
            }
        }
    }
}

class SelectionSort {
    constructor(array) {
        this.array = array;
    }

    sort() {
        let i;
        let j;
        let max;
        let temp;
        const size = this.array.length;
        for (i = 0; i < size - 1; i++){
            max = 0;
            for(j = 1; j <  size - i; j++){
                if(this.array[j] > this.array[max]){
                    max = j;
                }
                temp = this.array[size - 1 - i];
                this.array[size - 1 - i] = this.array[max];
                this.array[max] = temp;
            }
        }
    }
}

class MergeSort {
    constructor(array) {
        this.array = array;
    }

    merge(array, tempArray, lowerIndex, middleIndex, upperIndex ){
        let lowerStart = lowerIndex;
        let lowerStop = middleIndex;
        let upperStart = middleIndex + 1;
        let upperStop = upperIndex;
        let count = lowerIndex;
        while((lowerStart <= lowerStop && upperStart <= upperStop)) {
            if(array[lowerStart] < array[upperStart]) {
                tempArray[count++] = array[lowerStart++];
            }
            else {
                tempArray[count++] = array[upperStart++];
            }
        }
        while((lowerStart <= lowerStop)) {
            tempArray[count++] = array[lowerStart++];
        }
        while((upperStart <= upperStop)) {
            tempArray[count++] = array[upperStart++];
        }

        for(var i = lowerIndex; i <= upperIndex; i++) {
            array[i] = tempArray[i];
        }
    }
    mergeSort(array, tempArray, lowerIndex, upperIndex) {
        if(lowerIndex >= upperIndex){
            return;
        }
        let middleIndex = Math.floor((lowerIndex + upperIndex)/ 2);
        this.mergeSort(array, tempArray, lowerIndex, middleIndex);
        this.mergeSort(array, tempArray, middleIndex + 1, upperIndex);
        this.merge(array, tempArray, lowerIndex, middleIndex, upperIndex);
    }

    sort() {
        let size = this.array.length;
        let tempArray = new Array(size);
        this.mergeSort(this.array, tempArray, 0, size -1);
    }
}

class QuickSort {
    constructor(array) {
        this.array = array;
    }

    swap(array, first, second) {
        let temp = array[first];
        array[first] = array[second];
        array[second] = temp;
    }

    quickSortUtil(array, lower, upper) {
        if(upper <= lower){
            return;
        }
        const pivot = array[lower];
        let start = lower;
        let stop = upper;

        while((lower < upper)) {
            while((array[lower] <= pivot && lower < upper)){
                lower++;
            }
            while((array[upper] > pivot && lower <= upper)){
                upper--;
            }
            if(lower < upper){
                this.swap(array, upper, lower);
            }
        }
        this.swap(array, upper, start);
        this.quickSortUtil(array, start, upper - 1);
        this.quickSortUtil(array, upper + 1, stop);
    }

    sort(){
        const size = this.array.length;
        this.quickSortUtil(this.array, 0, size - 1);
    }
}

class BucketSort {
    constructor(array, lowerRange, upperRange) {
        this.range = 0;
        this.lowerRange = 0;
        this.array = array;
        this.range = upperRange - lowerRange;
        this.lowerRange = lowerRange;
    }

    sort(){
        let i;
        let j;
        const size = this.array.length;
        const count = new Array(this.range);

        for( i = 0; i < this.range; i++) {
            count[i] = 0;
        }
        for( i = 0; i < size; i++) {
            count[this.array[i] - lowerRange]++;
        }
        j = 0;
        for( i = 0; i < this.range; i++) {
            for(; count[i] > 0; (count[i]--)) {
                this.array[j++] = this.lowerRange + i;
            }
        }
    }
}

export {
    BubbleSort,
    InsertionSort,
    SelectionSort,
    MergeSort,
    QuickSort,
    BucketSort
};