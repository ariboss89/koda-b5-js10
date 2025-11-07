//Method Array (Mencari nilai maksimum)
let count = 0;
const arr = [10, 8, 12, 11, 1];

let number = arr[0];

let temp = 0;
let b = 0;

//mencari maksimum
for (let a = 0; a < arr.length; a++) {
  if (arr[a] >= number) {
    number = arr[a];
  }
}

console.log("Nilai maksimalnya adalah : ", number);
