function calculateBMI() {
    event.preventDefault(); //agar saat di submit, data input tidak terefresh

    let weight = document.getElementById('body-weight').value;
    let height = document.getElementById('body-height').value;

    let heightInMeter = height / 100; //ubah satuam cm ke m

    let BMI = weight / Math.pow(heightInMeter, 2);
    let BMIrounded = BMI.toFixed(2); //pembulatan dua angka terakhir dibelakang koma

    if (BMIrounded < 18.5) {
        document.getElementById('result').innerHTML = $(BMI) +
            ".Berat badan anda kurang";
    } else if (BMIrounded <= 24.9) {
        document.getElementById('result').innerHTML = $(BMI) +
            '.Berat badan anda ideal ';
    } else if (BMIrounded >= 24.9) {
        document.getElementById('result').innerHTML = $(BMI) +
            ' .Berat badan anda berlebih ';
    } else {
        document.getElementById('result').innerHTML = $(BMI) +
            ' . Anda obesitas';
    }



    console.log(BMIrounded);
}