function selectionSort(arr) {                       //Selection Sort in JavaScript.
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minimum = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minimum])
                minimum = j;
        }
        let swap = arr[i];
        arr[i] = arr[minimum];
        arr[minimum] = swap;
    }
}
