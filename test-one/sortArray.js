function sortAscending(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        // Tukar nilai jika elemen saat ini lebih besar dari elemen berikutnya
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

/**
 * Soal:
 * Buatlah fungsi dengan input array integer
 * untuk mengurutkan angka dari kecil kebesar
 * dan besar kekecil dengan manual
 * tanpa fungsi bawaan javascript
 */

function sortDescending(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        // Tukar nilai jika elemen saat ini lebih kecil dari elemen berikutnya
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// Contoh penggunaan
const numbers = [5, 2, 9, 1, 5, 6];
console.log("Sebelum pengurutan:", numbers);

// Pengurutan dari kecil ke besar
const ascendingResult = sortAscending([...numbers]);
console.log("Setelah pengurutan kecil ke besar:", ascendingResult);

// Pengurutan dari besar ke kecil
const descendingResult = sortDescending([...numbers]);
console.log("Setelah pengurutan besar ke kecil:", descendingResult);

module.exports = { sortAscending, sortDescending };
