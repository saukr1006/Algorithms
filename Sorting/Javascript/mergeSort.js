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
