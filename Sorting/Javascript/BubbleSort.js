function bubbleSort(arr) {                              //It takes a single argument, the array which you want to sort(In ascending order).
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {                  //If order is opposite then swap the elements.
                let swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
}
