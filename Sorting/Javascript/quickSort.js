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
