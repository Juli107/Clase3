
for (let i = 0; i < 4; i = i + 1) {
  let jugadoresFútbol = prompt("Ingresar Estrellas de Fútbol");
  let Goles = prompt("Ingresar Total de Goles");

  if (Goles >= 300) {
    console.log("El Jugador " + jugadoresFútbol);
    console.log("Estrella Mundial");
  } else {
    console.log("El Jugador " + jugadoresFútbol);
    console.log("Es de Madera");
  }
}
