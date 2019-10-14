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
