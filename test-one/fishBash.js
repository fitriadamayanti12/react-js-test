/**
 * Soal:
 * Buatlah fungsi dengan parameter berapa banyak angka
 * yg akan ditampilkan secara looping,
 * dimana jika angka tersebut habis dibagi 3 cetak "fish"
 * jika habis dibagi 5 cetak "bash" dan jika habis dibagi 15 cetak "fish bash",
 * cetak cukup salah satu dari kondisi tersebut,
 * cetak menggunakan console log atau sejenisnya
 */

function printFishBash(count) {
  for (let i = 1; i <= count; i++) {
    let output = "";
    if (i % 3 === 0) {
      output += "fish";
    }
    if (i % 5 === 0) {
      output += " bash";
    }
    console.log(output || i);
  }
}

printFishBash(15);

module.exports = printFishBash;
