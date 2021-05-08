// Execução no melhor caso O(n)
// Execução no pior caso O(n)^2

function bubbleSortV1(array) {
    for (let j=0; j<array.length -1; j++) {
        for (let i=0; i< array.length -1; i++) {
            if (array[i] > array[i+1]) {
                [array[i], array[i+1]] = [array[i+1], array[i]];
            }
        }
    }
    return array;
}

function bubbleSortV2(array) {
    for (let last=array.length -1; last>0; last--) {
        for (let i=0; i<last; i++) {
            if (array[i] > array[i+1]) {
                [array[i], array[i+1]] = [array[i+1], array[i]];
            }
        }
    }
    return array;
}

function bubbleSortV3(array) {
    let swap;
    let last = array.length - 1;
    do {
        swap = false;
        for (let i = 0; i < last; i++) {
            if (array[i] > array[i+1]) {
                [array[i], array[i+1]] = [array[i+1], array[i]];
                swap = true;
            }
        }
        last--;
    } while (swap)
    return array;
}

var items = [1,3,4,2];

console.log(bubbleSortV1(items));

console.log(bubbleSortV2(items));

console.log(bubbleSortV2(items));