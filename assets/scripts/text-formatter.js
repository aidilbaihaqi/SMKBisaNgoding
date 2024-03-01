function formatText() {
    let sentence = document.getElementById("sentence").value; // panggil id pada input

    let words = sentence.split(" "); // memisahkan sebuah string per space (" ")

    let result = [] // ini variable kosong. Nanti diisi dengan variable combineWord

    for (let i = 0; i < words.length; i++) { // menargetkan huruf awal pada setiap string yang diinput
        let firstLetter = words[i][0]
        let firstLetterUpperCase = firstLetter.toUpperCase();

        let remindLatter = words[i].slice(1) // memotong huruf pertama

        let combineWord = firstLetterUpperCase + remindLatter // menggabungkan kata
        result.push(combineWord) // variable combineword kita simpan ke variabel result


    }
    let resultString = result.join(' ')

    document.querySelector("#result").innerHTML = resultString;
}

let contenenc = 19 + 19

if contenenc 