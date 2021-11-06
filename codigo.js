//*Ejercicio 1
/*
for (let i = 0; i < 10; i = i + 1) {
    

 console.log (i);

} */

//*Ejercicio 2
/*
for (let i = 0; i < 10; i = i + 1) {
    
 let alumnos = prompt ("Ingresar su nombre");
 console.log (alumnos);

}



//*Ejercicio 3
for (let i = 0; i < 10; i = i + 1) {
    
 let alumnos = prompt ("Ingresar su nombre");
 console.log ("El alumno número:" + "i" + "es" + alumnos);

}*/

/*
//*Ejercicio 4
for (let i = 0; i < 3; i = i + 1) {

  let alumnos = prompt("Ingresar su nombre");
  let edad = prompt("Ingresar su edad");

  if (edad >= 18) {

    console.log("El alumno número:" + i + " es " + alumnos);
    console.log("Anotado en la nocturna");
  } 
  else {
    console.log("El alumno número:" + i + " es " + alumnos);
    console.log("Anotado en el ciclo normal");

  }

} */

//*Sentencia Break

/* 
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }

  alert(i);
}

for (let i = 0; i < 3; i = i + 1) {
  let alumnos = prompt("Ingresar su nombre");
  let edad = prompt("Ingresar su edad");

  if (parseInt(edad) >= 18) {
    console.log("El alumno número:" + i + " es " + alumnos);
    console.log("Anotado en la nocturna");
  } else {
    console.log("El alumno número:" + i + " es " + alumnos);
    console.log("Anotado en el ciclo normal");

    break;
  }
} */

//!Actividad 1

/*let UsrReg = "Julián Cuello";
let PassReg = "1234";

for (let i = 0; i < 4; i = i + 1) {
  let Usuario = prompt("Ingresar Usuario");
  let Password = prompt("Ingresar Password");

  if (Usuario == UsrReg && Password == PassReg) {
    console.log(" Bienvenido al sistema " + Usuario);
  } else {
    console.log("Error:" + i);
  }
}

let UsrReg = "Julián Cuello";
let PassReg = "1234";
let Error = 0;

for (let i = 0; i < 10; i = i + 1) {
  let Usuario = prompt("Ingresar Usuario");
  let Password = prompt("Ingresar Password");

  if (Usuario == UsrReg && Password == PassReg) {
    console.log(" Bienvenido al sistema " + Usuario);
    break;

  } else {
    console.log("Error:" + i);
    Error = Error + 1;

    if (Error == 3) {
      console.log("Chau Tarjeta");
      break;
    }
  }
} */

//*Sentencia Continue

/*
for (let i = 1; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  alert(i);
} */

/*//!Ejemplo While (Bucle Infinito)

let Usuario = "Pablo";

while (10 > 2) {
  console.log("Hola" + Usuario);
}
*/

//!Ejemplo While

/* let Usuario = prompt("Ingresar nombre de Usuario o Esc para salir");

while (Usuario != "Esc") {
  console.log(" Hola " + Usuario);
  Usuario = prompt("Ingresar Nombre de Usuario o Esc para salir");
} */

//!Ejemplo Do (por lo menos, se va a ejecutar 1 vez) While

/* let repetir = false;
do {
  console.log("¡Solo una vez!");
} while (repetir); */

/*do {
  var Usuario = prompt("Ingresar nombre de Usuario");
  console.log("Bienvenido al sistema " + Usuario);
} while (Usuario != "Esc"); */

//* Ejercitación 2

let Voto = prompt("Ingrese su voto: A o B");
let VotoA;
let VotoB;

while (Voto != "Esc") {
  if (Voto == "A" || Voto == "a") {
    VotoA = VotoA + 1;
  } else if (Voto == "B" || Voto == "b") {
    VotoB = VotoB + 1;
  } else {
    console.log("VOTO NULO");
  }

  Voto = prompt("Ingrese su voto: A o B");
}

console.log("Votos de A " + VotoA);
console.log("Votos de B " + VotoB);
