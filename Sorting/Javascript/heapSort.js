//you can take the input here. But before that check(and delete) the lines below(line number : 89 and 90).

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

let arr = {5, 4, 3, 2, 1};
let n = 5;
let obj = new Heap(n);
for(int i=0;i<n;i++)
    obj.add(arr[i]);
arr = sort();
//print array here.
