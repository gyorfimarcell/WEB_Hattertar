function SebessegErtek() {
    document.getElementById("sebessegErtek").innerHTML = document.getElementById("sebesseg").value;
}

const valtoSzam = 1000;

function Szamol() {
    let kapacitas = document.getElementById("kapacitas").value;
    if (kapacitas < 1) {
        alert("A kapacitás nem lehet kisebb mint 1!");
        return
    }
    let kapacitasMe = document.getElementById("kapacitasMe").value;
    let kapacitasKB = kapacitas * Math.pow(valtoSzam, kapacitasMe);

    let sebesseg = document.getElementById("sebesseg").value;
    let sebessegMe = document.getElementById("sebessegMe").value;
    let sebessegKB = sebesseg * Math.pow(valtoSzam, sebessegMe);

    let ido = kapacitasKB / sebessegKB;
    document.getElementById("eredmeny").innerHTML = IdoFormazas(ido);
}

function IdoFormazas(ido) {
    let ora = Math.floor(ido / 3600).toString().padStart(2, "0");
    let perc = Math.floor((ido % 3600) / 60).toString().padStart(2, "0");
    let masodperc = Math.round((ido % 60)).toString().padStart(2, "0");

    return `${ora}:${perc}:${masodperc}`;
}