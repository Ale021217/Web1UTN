var gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  numberOfFeet: 1,
  sayHello: function () {
    console.log("QUACK!!!");
  },
};

var ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  numberOfFeet: 3,
  sayHello: function () {
    console.log("Estoy encantado de conocerle.");
  },
};
var fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  numberOfFeet: 2,
  sayHello: function () {
    console.log("Hi there!");
  },
};

// I. Crear un arreglo con los 3 pingüinos adentro.

const pinguinos = [gunter, ramon, fred];
console.log(pinguinos);

/*II. Escriba un ciclo for para iterar a través de cada pingüino en la matriz e
imprima el valor de la propiedad del nombre de cada pingüino en la
consola. */

for (var i = 0; i < pinguinos.length; i++) {
  console.log(pinguinos[i].name);
}

//III. Imprima la longitud de la matriz de pingüinos en la consola.
console.log(pinguinos.length);

/* IV. Escriba un ciclo for para iterar a través de cada pingüino en la matriz y
agregue una nueva propiedad a cada pingüino llamada numberOfFeet con
un valor aleatorio del 1 al 5. */
for (var i = 0; i < pinguinos.length; i++) {
  console.log(pinguinos[i].numberOfFeet);
}

/*V. Escriba otro ciclo for para iterar a través de cada pingüino en la matriz, y
para cada pingüino que pueda volar, imprima en la consola un mensaje que
contenga el nombre del pingüino y "¡puede volar!" - por ejemplo, "¡Gunter
puede volar!" o "¡Ramón puede volar!" (No hagas nada por los pingüinos
que no pueden volar). */

for (var i = 0; i < pinguinos.length; i++) {
  if (pinguinos[i].canFly) {
    console.log(pinguinos[i].name + " puede volar!");
  }
}

//VI. Devuelva un arreglo solo con los pingüinos que tienen más de 2 pies.

for (var i = 0; i < pinguinos.length; i++) {
  if (pinguinos[i].numberOfFeet > 2) {
    console.log(pinguinos[i].name + " tiene mas de dos pies");
  }
}

/*VII. Agregue una nueva propiedad a su pingüino llamada favoriteFoods y
configúrela igual a una matriz que contiene una lista de tres cadenas.  */

pinguinos.favoriteFoods=["arroz", "frijoles", "ceviche"]
/* VIII. Accede a la segunda comida favorita de sus pingüinos e imprímela en la
consola usando console.log () 
 */

console.log(pinguinos.favoriteFoods[1]);

/*IX. Sin modificar nada de su código anterior, escriba una nueva línea de código
que cambie el valor del último elemento de la lista a "piñas"
(sobrescribiendo el valor anterior). 
 */
pinguinos.favoriteFoods[2]='piñas';

/*X. Escriba un cilo for para recorrer cada comida en la propiedad de comida
favorita de sus pingüinos e imprima cada una en la consola. */
for (var i= 0; i<pinguinos.length; i++) {
    console.log(pinguinos.favoriteFoods);
}