// MI PROYECTO FINAL CONSISTE EN CREAR UN SIMULADOR QUE ME PERMITA EMPAREJAR MÁS EFECTIVAMENTE DOS EQUIPOS DE FUTBOL 5.

//MENSAJE DE BIENVENIDA

console.log("USTED ESTÁ EN EL PRIMER Y UNICO SIMULADOR DE PARTIDOS DE FUTBOL 5");

// Función anti-NaN o para impedir que se ingresen caracteres erróneos(no numericos o fuera de mi rango de trabajo)

function obtenerValorValido(mensaje) {
    while (true) {
    let habilidad = parseInt(prompt(mensaje));
    if (!isNaN(habilidad) && habilidad >= 1 && habilidad <= 10 && Number.isInteger(habilidad)) {
        return habilidad;
    }
    alert("Ingresa un valor numérico entre 1 y 10.");
    }
}

// función promediar

function promediarHabilidades(n1, n2, n3, n4, n5, n6, n7, n8){

    let promedio = (n1+n2+n3+n4+n5+n6+n7+n8)/8;
    return promedio.toFixed(1)

}
//funcion para promediar medias de cada equipo

function promedioEquipo(equipo) {
  let total = 0;
  for (let i = 0; i < equipo.length; i++) {
    total += equipo[i].promedioJugador;
  }
  return (total / jugadoresPorEquipo);
}

// Clase constructora de objeto player//
class Player {
    constructor(nombre, disparo, gambeta, tecnica, estadoFisico, posicionamiento, temperatura_pectoral, defensa, atajando) {
        this.disparo = disparo;
        this.gambeta = gambeta;
        this.tecnica = tecnica;
        this.estadoFisico = estadoFisico;
        this.posicionamiento = posicionamiento;
        this.temperatura_pectoral = temperatura_pectoral;
        this.defensa = defensa;
        this.atajando = atajando;
        this.nombre = nombre;
        this.promedioJugador = 0;
    }  
    
    promediarHabilidades() {
          this.promedioJugador = promediarHabilidades(
          this.defensa,
          this.disparo,
          this.gambeta,
          this.tecnica,
          this.estadoFisico,
          this.posicionamiento,
          this.temperatura_pectoral,
          this.atajando
        );
        console.log("has creado a " + this.nombre + " , su media es de: " + this.promedioJugador);
    }
}

//variable - pido al usuario que seleccione la cantidad de jugadores que participaran

let jugadoresPorEquipo = obtenerValorValido("Seleccione la cantidad de jugadores por equipo: ");
jugadoresPorEquipo = parseInt(jugadoresPorEquipo);
  
//Arreglo: listado de jugadores/players dispobibles
  let playersList = [];
  for (let i = 0; i < jugadoresPorEquipo *2; i++) {
    let nombre = prompt("Ingrese nombre del jugador: ");
    let disparo = obtenerValorValido("Ingrese puntaje de disparo de " + nombre);
    let gambeta = obtenerValorValido("Ingrese puntaje gambeta: " + nombre);
    let tecnica = obtenerValorValido("Ingrese puntaje técnica: " + nombre);
    let estadoFisico = obtenerValorValido("Ingrese puntaje de Estado Físico de: " + nombre);
    let posicionamiento = obtenerValorValido("Ingrese puntaje posicionamiento: " + nombre);
    let temperatura_pectoral = obtenerValorValido("Ingrese temperatura pectoral: " + nombre);
    let defensa = obtenerValorValido("Ingrese defensa: " + nombre);
    let atajando = obtenerValorValido("Ingrese nivel de arquero: " + nombre);
    
    let newPlayer = new Player(nombre, disparo, gambeta, tecnica, estadoFisico, posicionamiento, temperatura_pectoral, defensa, atajando);
    newPlayer.promediarHabilidades();
    playersList.push(newPlayer);
  }

  //visualizo los jugadores disponibles

  console.log(playersList);

  function crearEquipo(playersList, jugadoresPorEquipo, equipoNombre) {
    let equipo = [];
  
    console.log(`Los Jugadores disponibles para ${equipoNombre} son: `);
    for (let i = 0; i < playersList.length; i++) {
      const namePlayer = playersList[i];
      console.log(namePlayer.nombre);
    }
  
    while (equipo.length < jugadoresPorEquipo) {
      const nombre = prompt(`Ingrese el nombre del jugador para agregarlo a ${equipoNombre} (o escriba 'stop' para detenerse):`);
  
      if (nombre === "stop") {
        break; // El usuario ha decidido detenerse
      }
      else if (equipo.length === jugadoresPorEquipo) {
        break; // Se alcanzó el límite de jugadores por equipo
      }
  
      const jugadorExiste = playersList.find(objeto => objeto.nombre === nombre);
  
      if (jugadorExiste) {
        equipo.push(jugadorExiste);
        playersList.splice(playersList.indexOf(jugadorExiste), 1);
        console.log(`Has agregado ${nombre} al ${equipoNombre}, con la media de: ${jugadorExiste.promedioJugador} puntos`);
      } else {
        console.log("Jugador no encontrado");
      }
    }
  
    console.log(`${equipoNombre} formará de la siguiente manera:`);
    for (let i = 0; i < equipo.length; i++) {
      const jugador = equipo[i];
      console.log("Nombre:", jugador.nombre, "Promedio:", jugador.promedioJugador);
      console.log("-----------------");
    }
  
    console.log(`Promedio del ${equipoNombre}:`, promedioEquipo(equipo));
  }
  
  // Llama a la función para crear el equipo 1
  crearEquipo(playersList, jugadoresPorEquipo, "Equipo 1");
  
  // Recorre el array original y muestra los nombres de los jugadores al usuario
  console.log("Los Jugadores disponibles son: ")
  for (let i = 0; i < playersList.length; i++) {
    const namePlayer = playersList[i];
    console.log(namePlayer.nombre);
  }

// llamo a la función crearEquipo para crear el equipo 2

  crearEquipo(playersList, jugadoresPorEquipo, "Equipo 2");

  //creo constantes para comparar equipos
  const promedioEquipo1 = promedioEquipo("Equipo 1");
  const promedioEquipo2 = promedioEquipo("Equipo 2");
  
  //comparo los promedios de los 2 equipos para baticinar un resultado:

  if (promedioEquipo1 > promedioEquipo2) {
      console.log("Las probabilidades están a favor del Equipo 1");
  } else if (promedioEquipo1 === promedioEquipo2) {
      console.log("Las probabilidades indican un empate");
  } else {
      console.log("Las probabilidades están a favor del Equipo 2");
  }