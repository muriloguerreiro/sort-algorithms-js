// Execução no melhor caso O(n)^2
// Execução no pior caso O(n)^2

function selectionSortV1(array) {
    let menor;

    for (let i = 0; i < array.length - 1; i++) {
        menor = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[menor]) {
                menor = j;
            }
        }
        if (i != menor) {
            [array[i], array[menor]] = [array[menor], array[i]];
        }
    }
    return array;
}

function selectionSortV2(array) {
    let last = array.length - 1;
    let first = 0;

    for (j=0; j<last; j++) {
        let menor = first;
        for (let i=first; i<last; i++) {
            if (array[menor] > array[i+1]) {
                menor = i+1;
                swap = true;
            }
        }
        if (menor != first) {
            [array[first], array[menor]] = [array[menor], array[first]];         
        }
        first++;
    }
    
    return array;
}

var items = [12,094,18,37,59,81,39,74,91,013,98,109,38,938,475,87,203,94,60,3,89,58,23,90,5];
var items2 = [01,929,81,820,49,83,274,892,36,56,729,83,7498,26,5,291,63,29,7,34,75,2,637,4,85];

console.log(selectionSortV1(items));
//console.log(selectionSortV2(items));