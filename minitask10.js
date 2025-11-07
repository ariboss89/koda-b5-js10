//Method Array (Mencari nilai maksimum)
const arr = [10, 8, 12, 11, 1];
let numberMax = arr[0];

//mencari maksimum
for (let a = 0; a < arr.length; a++) {
  if (arr[a] >= numberMax) {
    numberMax = arr[a];
  }
}

console.log("Nilai maksimalnya adalah : ", numberMax);
