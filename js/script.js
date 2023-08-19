// MI PROYECTO FINAL CONSISTE EN CREAR UN SIMULADOR QUE ME PERMITA EMPAREJAR MÁS EFECTIVAMENTE DOS EQUIPOS DE FUTBOL 5.

//MENSAJE DE BIENVENIDA

console.log("USTED ESTÁ EN EL PRIMER Y UNICO SIMULADOR DE PARTIDOS DE FUTBOL 5");

//FUNCION PARA PROMEDIAR LA HABILIDAD DE LOS JUGADORES

function promediarEquipos(habilidadEquipo, jugadoresPorEquipo){
    return habilidadEquipo / jugadoresPorEquipo;
}
// Función anti-NaN o para impedir que se ingresen caracteres erroneos al calcular habilidad
function obtenerHabilidadValida(mensaje) {
    while (true) {
        let habilidad = parseInt(prompt(mensaje));
        if (!isNaN(habilidad) && habilidad >= 1 && habilidad <= 10 && Number.isInteger(habilidad)) {
            return habilidad;
        }
        alert("Ingresa un valor numérico entre 1 y 10.");
    }
}
// DECLARO MIS VARIABLES

let habilidadEquipoA = 0;
let habilidadEquipoB = 0;

// ELIJO LA CANTIDAD DE JUGADORES POR EQUIPO

let jugadoresPorEquipo = prompt( "seleccione la cantidad de jugadores por equipo: ") ;
jugadoresPorEquipo = parseInt(jugadoresPorEquipo);

// BUCLE PARA CREAR JUGADORES Y ASIGNARLE PUNTAJE DE HABILIDAD, EN ETAPA SUPERIOR DEL PROYECTO SE COMPLEJIZARÁ ESTE PROCESO

for (let i = 1; i <= jugadoresPorEquipo; i ++) {

    let nombre = prompt("ingrese nombre de jugador N° " + i + " del equipo A");
    let habilidad = obtenerHabilidadValida("Ingrese la habilidad del jugador " + i + " del equipo A (de 1 a 10)");
    habilidadEquipoA += habilidad;
        console.log("jugador" +i + ":", nombre);
        console.log("habilidad:", habilidad);
        console.log("Habilidad acumulado equipo A: ", habilidadEquipoA);
        console.log("---------------");
    
}
//CALCULO EL PROMEDIO DEL EQUIPO "A"
let promedioEquipoA = promediarEquipos( habilidadEquipoA, jugadoresPorEquipo);
console.log("EL Promedio del equipo A es: ", promedioEquipoA);

// MENSAJE COMIENZO EQUIPO B

console.log("AHORA VAMOS CON EL EQUIPO B");

// BUCLE PARA CREAR JUGADORES Y ASIGNARLE PUNTAJE DE HABILIDAD, EQUIPO B

for (let i = 1; i <= jugadoresPorEquipo; i ++) {

    let nombre = prompt("ingrese nombre de jugador N° " + i + " del equipo B");
    let habilidad = obtenerHabilidadValida("Ingrese la habilidad del jugador " + i + " del equipo B (de 1 a 10)");
    habilidadEquipoB += habilidad;
        console.log("jugador" +i + ":", nombre);
        console.log("habilidad:", habilidad);
        console.log("Habilidad acumulado equipo B: ", habilidadEquipoB);
        console.log("---------------");
    
}
//CALCULO EL PROMEDIO DEL EQUIPO "A"
let promedioEquipoB = promediarEquipos( habilidadEquipoB, jugadoresPorEquipo);
console.log("EL Promedio del equipo B es: ", promedioEquipoB);

// REALIZAMOS UNA COMPARACION BÁSICA

//calcular posibilidades de cada equipo

if (promedioEquipoA > promedioEquipoB){
    console.log("Las probabilidades están a favor del Equipo A");
}
else if ( promedioEquipoA == promedioEquipoB){
    console.log("las probabilidades indican un empate");
}
else {
    console.log ("las probababilidades están a favor del Equipo B");
}


