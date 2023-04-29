const persona = {
    nombre: "Ricardo",
    edad: 25
}


if(persona.edad > 18) {
    console.log("puede conducir")
} else {
    console.log("No puede conducir")
}

const listaJuegos = ["Fornite", "Warzone", "AmongUs"]

console.log(listaJuegos[0])
console.log(listaJuegos[1])
console.log(listaJuegos[2])
console.log(listaJuegos[3])
//FUNCIONES PUSH POP
// agregar un juego
listaJuegos.push("Horizon")
console.log(listaJuegos)
// eliminar el ultimo juego de la lista
listaJuegos.pop()
console.log(listaJuegos)
listaJuegos.push("FarCry")
console.log(listaJuegos)
listaJuegos.pop()
console.log(listaJuegos)
listaJuegos.pop()
console.log(listaJuegos)


