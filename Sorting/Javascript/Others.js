let arr = window.prompt("Enter the array : ").split(" ");
for (let i = 0; i < arr.length; i++)
    arr[i] = Number(arr[i]);

function merge(arr, s, mid, e) {
    let i = s, j = mid + 1;
    let tempArr = new Array();
    while (i <= mid && j <= e) {
        if (arr[i] < arr[j]) {
            tempArr.push(arr[i]);
            i++;
        }
        else {
            tempArr.push(arr[j]);
            j++;
        }
    }
    if (i <= mid)
        while (i <= mid) {
            tempArr.push(arr[i]);
            i++;
        }
    else
        while (j <= e) {
            tempArr.push(arr[j]);
            j++;
        }
    for (let i = 0; i < tempArr.length; i++)
        arr[i + s] = tempArr[i];
}

function mergeSort(arr, s, e) {
    if (s >= e)
        return 0;
    let mid = Math.floor((s + e) / 2);
    mergeSort(arr, s, mid);
    mergeSort(arr, mid + 1, e);
    merge(arr, s, mid, e);
    return 0;
}

function quickSort(arr, s, e) {
    if (s >= e)
        return 0;
    let pivot = arr[s];
    let i = s + 1, j = e, ind = s;
    for (let x = 1; x < e - s + 1; x++) {
        if (arr[i] > pivot) {
            let swap = arr[i];
            arr[i] = arr[j];
            arr[j] = swap;
            j--;
        }
        else {
            ind = i;
            i++;
        }
    }
    let swap = arr[ind];
    arr[ind] = arr[s];
    arr[s] = swap;
    quickSort(arr, s, ind - 1);
    quickSort(arr, ind + 1, e);
    return 0;
}

function countingSort(arr) {
    let size = arr.length;
    let numMax = arr[0];
    let numMin = arr[0];
    for (let i = 1; i < size; i++) {
        if (arr[i] > numMax)
            numMax = arr[i];
        if (arr[i] < numMin)
            numMin = arr[i];
    }
    let sizeTemp = numMax - numMin + 1;
    let tempArr = new Array(sizeTemp);
    for (var i = 0; i < sizeTemp; i++)
        tempArr[i] = 0;
    for (var i = 0; i < size; i++)
        tempArr[arr[i] - numMin]++;
    let counter = 0;
    for (var i = 0; i < sizeTemp; i++)
        for (var j = 0; j < tempArr[i]; j++) {
            arr[counter] = i + numMin;
            counter++;
        }
}

class Heap {
    constructor(n) {
        this.maxSize = n;
        this.size = 0;
        this.arr = new Array(n);
        for (let i = 0; i < n; i++)
            this.arr[i] = 0;
    }
    add(element) {
        this.arr[this.size] = element;
        let index = this.size;
        while (index != 0) {
            let tempInd = Math.floor((index - 1) / 2);
            if (this.arr[tempInd] < this.arr[index]) {
                let swap = this.arr[tempInd];
                this.arr[tempInd] = this.arr[index];
                this.arr[index] = swap;
                index = tempInd;
            }
            else
                break;
        }
        this.size++;
    }
    //Array : 6 6 6 4 2 5 2 2 2 2
    heapifyAndDelete(index) {
        if (index >= this.size)
            return 0;
        let element = this.arr[index];
        this.size--;
        this.arr[index] = this.arr[this.size];
        while (true) {  //here.
            let in1 = index * 2 + 1;
            let in2 = in1 + 1;
            if (in2 < this.size) {
                let in3;
                if (this.arr[in2] > this.arr[in1])
                    in3 = in2;
                else
                    in3 = in1;
                if (this.arr[in3] > this.arr[index]) {
                    let swap = this.arr[in3];
                    this.arr[in3] = this.arr[index];
                    this.arr[index] = swap;
                    index = in3;
                }
                else {
                    break;
                }
            }
            else if (in2 == this.size) {
                if (this.arr[in1] > this.arr[index]) {
                    let swap = this.arr[in1];
                    this.arr[in1] = this.arr[index];
                    this.arr[index] = swap;
                    break;
                }
                else
                    break;
            }
            else
                break;
        }
        return element;
    }
    sort() {
        console.log("Hello");
        let tempArr = new Array(this.maxSize);
        for (var i = 0; i < this.maxSize; i++)
            tempArr[i] = this.heapifyAndDelete(0);
        return tempArr;
    }
    print() {
        console.log(...this.arr);
    }
}

function reverse(arr) {
    let n = arr.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        let swap = arr[i];
        arr[i] = arr[n - i - 1];
        arr[n - i - 1] = swap;
    }
}

function HeapSort(arr) {
    let hp = new Heap(arr.length);
    for (let i = 0; i < arr.length; i++)
        hp.add(arr[i]);
    arr = hp.sort();
    reverse(arr);
    return arr;
}

// arr = HeapSort(arr);

// quickSort(arr, 0, arr.length - 1);

// mergeSort(arr, 0, arr.length - 1);
countingSort(arr);
console.log(arr);
