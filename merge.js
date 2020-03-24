function merge(arr1, arr2) {
    if (!arr1.length)
        return arr2;
    if (!arr2.length)
        return arr1;

    const sortedArr = [];

    // while (arr1.length && arr2.length) {
    //     if (!arr2.length || arr1[0] < arr2[0])
    //         sortedArr.push(arr1.shift());
    //     else if (!arr1.length || arr2[0] <= arr1[0])
    //         sortedArr.push(arr2.shift());
    // }
    // return sortedArr;

    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0])
            sortedArr.push(arr1.shift());
        else
            sortedArr.push(arr2.shift());
    }

    return [...sortedArr, ...arr1, ...arr2];
}