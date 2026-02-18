let botonSi = document.getElementById("si");
let botonNo = document.getElementById("no");
let mensaje = document.getElementById("mensajeFinal");
let tamaño = 20;

botonNo.addEventListener("mouseover", function() {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    botonNo.style.left = x + "px";
    botonNo.style.top = y + "px";

    tamaño += 5;
    botonSi.style.fontSize = tamaño + "px";
});

botonSi.addEventListener("click", function() {
    mensaje.innerHTML = "💛 Gracias, yo sabía que sí querías ❤️";
});
