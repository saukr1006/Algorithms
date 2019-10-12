function insertionSort(arr) {                           //Sorts arr by insertion sort algorithm.
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let j = i - 1;
        while (j >= 0 && arr[j] > arr[j + 1]) {
            let swap = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = swap;
            j--;
        }
    }
}
