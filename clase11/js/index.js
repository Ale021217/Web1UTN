var num = 5;
var nombre = "Pedro";
let bandera = true;

console.log(num);
console.log(nombre);
console.log(bandera);

if (5 > 3) {
  //let variables en su scope=ambito
  //var variables globales

  var edad = 50;
  console.log(edad);
}

console.log(edad);

/* Tipos
string
number
boolean
arrays
objetos
Coercion*/
if (5 == "5") {
  console.log("Entra");
}

const persona = {
  cedula: 55454545,
  nombre: "Pedro",
  apellido1: "Perez",
  edad: 50,
  apellido2: " Rodriguez",
};

console.log(persona);
var tieneApellido = persona.hasOwnProperty("apellido1");
console.log(tieneApellido);

console.log(persona.apellido1);

//valor indefinido va a falso
if (persona.apellido2) {
  console.log("Apellido 2 es:" + persona.apellido2);
} else {
  console.log("No tiene apellido 2");
}

//Concatenar +, String Template

const mensaje = `El mensaje es, el nombre de la persona es : ${nombre}, y la edad es: ${edad}`;
console.log(mensaje);

const lista = ["rojo", "azul", "verde", "amarillo"];
//spread
console.log(lista[2]);

lista.forEach((value, index) => {
  const mensaje = `El color es: ${value},en la posicion: ${index}`;
  console.log(mensaje);
});

lista.map((valor, indice) => {
  if (valor == "rojo") {
    console.log("Si es rojo");
  } else {
    console.log("Es otro color, " + valor);
  }
});

const listaPersonas = [
  {
    cedula: 1,
    nombre: "Pedro",
    apellido: "Perez",
    edad: 50,
  },

  {
    cedula: 1,
    nombre: "Maria",
    apellido: "Acosta",
    edad: 50,
  },
  {
    cedula: 1,
    nombre: "Melanie",
    apellido: "Rodriguez",
    edad: 50,
  },
  {
    cedula: 1,
    nombre: "Jossimar",
    apellido: "Alcocer",
    edad: 50,
  },
  {
    cedula: 1,
    nombre: "Bebote",
    apellido: "Aguilera",
    edad: 20,
  }
];


const results = listaPersonas.map((persona, index) => {
    const nombre = `${persona.nombre} ${persona.apellido}`;
    return {
      id: index,
      cedula: persona.cedula,
      nombreCompleto: nombre,
      edad: persona.edad
    };
  }).filter(x=>x.edad>30);

  console.log(...results);

 
  function calcular(num1,num2){

    return num1+num2;

  }

  console.log(calcular(5,10));