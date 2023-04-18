function parImpar() {
    let num = prompt("Introduce un número entero:");
    let resultado = num % 2 === 0 ? "par" : "impar";
    alert("El número introducido es " + resultado);
}

function tipoTexto() {
    let texto = prompt("Introduce un texto:");
    let mayusculas = texto.toUpperCase();
    let minusculas = texto.toLowerCase();
    let resultado;
    if (texto === mayusculas) {
        resultado = "mayúsculas";
    } else if (texto === minusculas) {
        resultado = "minúsculas";
    } else {
        resultado = "mezcla de mayúsculas y minúsculas";
    }
    alert("El texto introducido está formado por " + resultado);
}

function esPalindromo() {
    let texto = prompt("Introduce un texto:");
    let textoLimpio = texto.toLowerCase().replace(/[\W_]/g, '');
    let textoInvertido = textoLimpio.split('').reverse().join('');
    let resultado = textoLimpio === textoInvertido ? "Sí" : "No";
    alert("El texto introducido " + (resultado === "Sí" ? "es" : "no es") + " un palíndromo");
}

document.addEventListener("DOMContentLoaded", function() {
    let botonParImpar = document.getElementById("boton-par-impar");
    botonParImpar.addEventListener("click", parImpar);

    let botonTipoTexto = document.getElementById("boton-tipo-texto");
    botonTipoTexto.addEventListener("click", tipoTexto);

    let botonEsPalindromo = document.getElementById("boton-es-palindromo");
    botonEsPalindromo.addEventListener("click", esPalindromo);
});
