const computadora1 = 40000;
const computadora2 = 35000;
const computadora3 = 30000;
const computadora4 = 100000;

let cuotas;

function precios(codigoPC) {
    switch(codigoPC) {
        case 1:
            alert('La Computadora Ryzen 7 vale $40000')
            break
        case 2:
            alert('La Computadora Ryzen 5 vale $35000')
            break
        case 3:
            alert('La Computadora Ryzen 3 vale $30000')
            break
        case 4:
            alert('La Computadora Ryzen 9 vale $100000')
            break
        default:
            alert('No tenemos esta computadora.🤷‍♂️')
    }
}

function consultaComputadora() {
    let codigoPC = prompt('Ingresa el codigo numerico de la computadora por favor')
    if(codigoPC){
        precios(parseInt(codigoPC))
        cuotas()
        let respuesta = confirm('¡Quieres consultar otros precios?')
            if(respuesta === true) {
                consultaComputadora()
            } else {
                alert('Muchas gracias por visitarnos')
            }
    } else {
        console.error('Debes ingresar un codigo numerico valido')
    }
}

function cuotas() {
    console.log('Puedes pagar en: ')
    for(let i = 1; i <= 6; i++) {
        console.log(i, 'cuotas sin intereses.')
    }
}

consultaComputadora();




