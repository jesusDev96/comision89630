// function saludar() {
//     console.log("Hola coder!!")
// }

// saludar()
// let numeroA = 50
// function sumar() {
//     let numeroA = 15
//     let numeroB = 30
//     let resultado = numeroA + numeroB
//     return resultado
// }
// console.log(sumar())
// let calculo = sumar()
// let conIva = calculo*1.21
// console.log(conIva)

// const restar = function () {
//     let numeroA = 15
//     let numeroB = 30
//     let resultado = numeroA - numeroB
//     return resultado
// }
// console.log(restar())

// let primerNumero = parseInt(prompt("ingrese el primer numero"))
// let segundoNumero = parseInt(prompt("ingrese el segundo numero"))


// function sumar(numeroA, numeroB) {
//     let resultado = numeroA + numeroB
//     console.log(resultado)
// }

// sumar(primerNumero, segundoNumero)


// const calculadoraDel10 = function(numeroA) {
//     console.log(numeroA*10)
// }

// const calculadoraDel10 = (numeroA) => {
//     console.log(numeroA*10)
// }

// const calculadoraDel10 = numeroA => {
//     console.log(numeroA*10)
// }

// const calculadoraDel10 = numeroA => numeroA*10
// console.log(calculadoraDel10(5))

// const multiplicar = (numeroA, numeroB) => numeroA*numeroB



// Operaciones
function sumar () {
    let numeroA = parseInt(prompt("Ingrese el primer numero"))
    let numeroB = parseInt(prompt("Ingrese el segundo numero"))
    let resultado = numeroA + numeroB
    alert(numeroA + " + " + numeroB + " = " + resultado)
}

function restar () {
    let numeroA = parseInt(prompt("Ingrese el primer numero"))
    let numeroB = parseInt(prompt("Ingrese el segundo numero"))
    let resultado = numeroA - numeroB
    alert(numeroA + " - " + numeroB + " = " + resultado)
}

function multiplicar () {
    let numeroA = parseInt(prompt("Ingrese el primer numero"))
    let numeroB = parseInt(prompt("Ingrese el segundo numero"))
    let resultado = numeroA * numeroB
    alert(numeroA + " x " + numeroB + " = " + resultado)
}

function dividir () {
    let numeroA = parseInt(prompt("Ingrese el primer numero"))
    let numeroB = parseInt(prompt("Ingrese el segundo numero"))
    let resultado = numeroA / numeroB
    alert(numeroA + " / " + numeroB + " = " + resultado)
}


let menu = parseInt(prompt("Elija una opcion: \n 1-sumar \n 2-restar \n 3-multiplicar \n 4-dividir \n 5-salir"))

while(menu !== 5){
    switch(menu) {
        case 1:
            sumar()
            break
        case 2:
            restar()
            break
        case 3:
            multiplicar()
            break
        case 4:
            dividir()
            break
        default:
            alert("Opcion incorrecta")
    }

    menu = parseInt(prompt("Elija una opcion: \n 1-sumar \n 2-restar \n 3-multiplicar \n 4-dividir \n 5-salir"))

}
