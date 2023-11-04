
for (let step = 0; step < 5; step++) {
    // Se ejecuta 5 veces, con valores del paso 0 al 4.
    console.log("Camina un paso hacia el este");
  }

let iterator = 0;

while (iterator < 5) {
    console.log("ciclo while");


    iterator++;
}

let iterator2 = 0;

do {

    
    iterator2++;
} while (iterator2 < 5);

  let texto = "asddasd";

  let num1 = 1.5;

  let num2 = -2;


  let total = num1 + num2; //3
  //12

  let isCar = true; 
  let isCat = false; 

  let miArreglo = [
    "mi carro", 2000, true
  ]

  miArreglo.push("Colombia");

  console.log(miArreglo.indexOf(2000)); //1

  console.log(miArreglo[1]);

  //miArreglo.length = 3
  // maxima mosicion 2

  for (let index = 0; index < miArreglo.length; index++) {
    console.log(miArreglo[index]);
  }

  let persona = {
    nombre: "Juan",
    edad: 17,
    nacionalidad: "Colombiano",
    visa: true 
  }

  let nacionalidad = persona.nacionalidad;

  console.log(Object.getOwnPropertyNames(persona));

  const persona2 = new Object();
  persona2.nombre = "Juan";
  persona2.edad = 17;
  persona2.nacionalidad = "Colombiano";
  persona2.visa = true;

  let visa = persona2['visa'];

if("carro" === "carro"){
    alert("verdadero");
}
 

if (1 !== 1) {
    alert("si");
}
 