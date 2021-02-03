// Fibbonachi function
function fibonnachi(vol) {
    var fib = [];
for (var i = 1; i < vol; i++) {
    fib[0] = 0;
    fib[1] = 1;
    var c = 0;
    c += fib[i] + fib[i-1];
    fib.push(c);
}
   return console.log(fib);
}
fibonnachi(10);

// Palindrom
function palindrom(word) {
    
var wordLen = word.length,
    wordReverse = word.split('').reverse().join('');

if (word == wordReverse) {
    console.log(true);
} else {
    console.log(false);
}

}
palindrom("hello");

// Enumeration

var arr = [1, 5, 3, 8, 6];

for (var i = 1; i < arr.length; i++) {
    var min = arr[0];
    if (arr[i] > arr[0]) {
        arr[i] = arr[]
    }
}