function saklar() {
    // INI VARIABLE UNTUK TOMBOL RUANG KELUARGA
    let toggle1 = document.getElementById('default-toggle-1'); 
    let toggle2 = document.getElementById('default-toggle-2');
    let toggle3 = document.getElementById('default-toggle-3');

    let allToggle1 = document.getElementById('all-toggle-1');

    // INI VARIABLE UNTUK GAMBAR LAMPU RUANG KELUARGA
    let lampu1 = document.getElementById('lampu1');
    let lampu2 = document.getElementById('lampu2');
    let lampu3 = document.getElementById('lampu3');

    // LOGIKA UNTUK CETRAK CETREK LAMPU 1-3 RUANGAN KELUARGA
    if (toggle1.checked) {
        lampu1.src = "assets/images/on.gif";
    } else {
        lampu1.src = "assets/images/off.gif";
    }
    if (toggle2.checked) {
        lampu2.src = "assets/images/on.gif";
    } else {
        lampu2.src = "assets/images/off.gif";
    }
    if (toggle3.checked) {
        lampu3.src = "assets/images/on.gif";
    } else {
        lampu3.src = "assets/images/off.gif";
    }
    // LOGIKA LAMPU RUANGAN KELUARGA
    if (allToggle1.checked) {
        lampu1.src = "assets/images/on.gif",
        lampu2.src = "assets/images/on.gif",
        lampu3.src = "assets/images/on.gif";
    }
}

function saklar2() {
     // INI VARIABLE UNTUK TOMBOL RUANG MAKAN
     let toggle4 = document.getElementById('default-toggle-4');

    // INI VARIABLE UNTUK GAMBAR LAMPU RUANG MAKAN
    let lampu4 = document.getElementById('lampu4');

    // LOGIKA LAMPU 4 RUANGAN MAKAN 
    if (toggle4.checked) {
        lampu4.src = "assets/images/on.gif";
    } else {
        lampu4.src = "assets/images/off.gif";
    }
}

function saklar3() {
    // INI VARIABLE UNTUK TOMBOL RUANG TIDUR
    let toggle5 = document.getElementById('default-toggle-5');
    let toggle6 = document.getElementById('default-toggle-6');

    let allToggle2 = document.getElementById('all-toggle-2');

    // INI VARIABLE UNTUK GAMBAR LAMPU RUANG TIDUR
    let lampu5 = document.getElementById('lampu5'); 
    let lampu6 = document.getElementById('lampu6');

    // LOGIKA LAMPU 5-6 RUANGAN TIDUR
    if (toggle5.checked) {
        lampu5.src = 'assets/images/on.gif';
    } else {
        lampu5.src = 'assets/images/off.gif';
    }
    if (toggle6.checked) {
        lampu6.src = 'assets/images/on.gif';
    } else {
        lampu6.src = 'assets/images/off.gif';
    }

    // LOGIKA LAMPU RUANGAN TIDUR
    if (allToggle2.checked) {
        lampu5.src = 'assets/images/on.gif';
        lampu6.src = 'assets/images/on.gif';
    }

}

function saklar4() {
    // INI VARIABLE UNTUK TOMBOL RUANG TAMU
        let toggle7 = document.getElementById('default-toggle-7');
        let toggle8 = document.getElementById('default-toggle-8');
        let toggle9 = document.getElementById('default-toggle-9');
        let toggle10 = document.getElementById('default-toggle-10');
        let allToggle3 = document.getElementById('all-toggle-3');
    // INI VARIABLE UNTUK GAMBAR LAMPU RUANG TAMU
        let lampu7 = document.getElementById('lampu7');
        let lmapu8 = document.getElementById('lmapu8');
        let lampu9 = document.getElementById('lampu9');
        let lampu10 = document.getElementById('lampu10');

    // LOGIKA LAMPU 7-10 RUANGAN TAMU
        if (toggle7.checked) {
            lampu7.src = 'assets/images/on.gif';
        } else {
            lampu7.src = 'assets/images/off.gif';
        }
        if (toggle8.checked) {
            lampu8.src = 'assets/images/on.gif';
        } else {
            lampu8.src = 'assets/images/off.gif';
        }
        if (toggle8.checked) {
            lampu8.src = 'assets/images/on.gif';
        } else {
            lampu8.src = 'assets/images/off.gif';
        }
        if (toggle9.checked) {
            lampu9.src = 'assets/images/on.gif';
        } else {
            lampu9.src = 'assets/images/off.gif';
        }
        if (toggle10.checked) {
            lampu10.src = 'assets/images/on.gif';
        } else {
            lampu10.src = 'assets/images/off.gif';
        }

        // LOGIKA LAMPU RUANGAN TAMU
        if (allToggle3.checked) {
            lampu7.src = 'assets/images/on.gif';
            lampu8.src = 'assets/images/on.gif';
            lampu9.src = 'assets/images/on.gif';
            lampu10.src = 'assets/images/on.gif';

        }
}


