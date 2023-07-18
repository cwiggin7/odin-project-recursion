// iterative version
function fibs(number) {
    arr = [0,1]
    if (arr.length >= number)
        return arr.slice(0, number);

    while (number > arr.length) {
        arr.push(arr[arr.length-2] + arr[arr.length-1]);
    }

    return arr;
}

// recursive version
function fibsRec(number, arr=[0,1]) {
    if(arr.length >= number) {
        return arr;
    }

     arr.push(arr[arr.length-2] + arr[arr.length-1])
     return fibsRec(number, arr)
}

console.log(fibs(8));
