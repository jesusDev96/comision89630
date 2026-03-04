// IF
// let validar = false
// if(validar) {
//     console.log("Variable verdadera")
// }

// let fruta = "melon"
// let mes = "enero"

// if(fruta == "mandarina") {
//     console.log("Esta puede ser una fruta de otoño")
// } else if(fruta == "frutilla") {
//     console.log("Estamos en primavera")
// } else {
//     console.log("Banana y manzana son frutas de toda estacion")
// }


// OR || 

// if(mes == "enero" || fruta == "melon") {
//     console.log("Estamos en verano")
// }

// AND &&
// if(fruta == "melon" && (mes == "enero" || mes == "febrero" || mes == "marzo" || mes == "diciembre")) {
//     console.log("Estamos en verano")
// }

// let edad = 18

// if(edad >= 18) {
//     console.log("Podes comprar en la vinoteca")
// } else {
//     console.log("No podes comprar")
// }



// FOR
// for("desde"; "hasta"; "actualizacion") {
//     // codigo a ejecutar
// }

// for(let i=1; i<=10; i++) {
//     console.log(i)
// }

// let numero = parseInt(prompt("Bienvenido! Ingrese la tabla de multiplicar que desea"))
// console.log("Tabla de multiplicar del "+numero)
// for(let i=1; i<=15; i++) {
//     let resultado = i*numero
//     console.log(numero+"x"+i+": "+resultado)
// }


// console.log("Cuenta regresiva")

// for(let i=10; i>=1; i--) {
//     console.log(i)
//     if(i==2) {
//         console.log("Cancelamos el despegue")
//         break
//     }
//     if(i==1) {
//         console.log("Despegue!")
//     }
// }



// while

// let continuar = true
// while(continuar) {
//     let numero = parseInt(prompt("Bienvenido! Ingrese la tabla de multiplicar que desea"))
//     console.log("Tabla de multiplicar del "+numero)
//     for(let i=1; i<=5; i++) {
//         let resultado = i*numero
//         console.log(numero+"x"+i+": "+resultado)
//     }
//     let confirmacion = prompt("Desea hacear otro calculo? (si/no)").toLowerCase()
//     if(confirmacion == "no") {
//         continuar = false
//         console.log("Gracias!")
//     }
// }



// SWITCH-CASE
// let continuar = true 
// while(continuar) {
//     let menu = parseInt(prompt("Ingrese 1 para ver su cuenta, 2 para extraccion, 3 para deposito"))

//     switch(menu) {
//         case 1:
//             console.log("Total de la cuenta $500.000")
//             break
//         case 2:
//             console.log("Limite de extraccion $120.000")
//             break
//         case 3:
//             console.log("Limite de deposito $200.000")
//             break
//         default:
//             console.log("Opcion incorrecta")
//     }

//     let confirmacion = prompt("Desea hacear otra operacion? (si/no)").toLowerCase()
//     if(confirmacion == "no") {
//         continuar = false
//         console.log("Retire su tarjeta")
//     }

// }
