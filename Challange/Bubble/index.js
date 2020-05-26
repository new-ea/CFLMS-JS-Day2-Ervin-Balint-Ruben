const numbers = [1, 3, 5, 4, 5, 9, 6, 1, 2, 6, 5, 4, 4, 9, 7 ]
/* Bubble sort */

for (let i = 0; i <= numbers.length - 2; i++ ) {
    for (let z = 0; z <= numbers.length - 2; z++ ) {
        if (numbers[z] > numbers[z + 1]) {
            const num = numbers[z];
            numbers[z] = numbers[z + 1];
            numbers[z + 1] = num;
        }
    }
}

console.log(numbers)

