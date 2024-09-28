function sortEvenOddDescending(arr) {
    return arr
        .sort((a, b) => {
            // Compare even numbers first, then odd numbers
            const isEvenA = a % 2 === 0;
            const isEvenB = b % 2 === 0;

            // Sort evens first (descending), then odds (descending)
            if (isEvenA && isEvenB) {
                return b - a; // Both are even, sort descending
            } else if (isEvenA) {
                return -1; // a is even, b is odd
            } else if (isEvenB) {
                return 1; // b is even, a is odd
            } else {
                return b - a; // Both are odd, sort descending
            }
        });
}

// Test the function
const inputArray = [3, 2, 5, 1, 8, 9, 6];
const outputArray = sortEvenOddDescending(inputArray);
console.log(outputArray); // Output: [8, 6, 2, 9, 5, 3, 1]
