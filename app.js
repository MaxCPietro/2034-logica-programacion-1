/*Este codigo es un juego de adivinar un numero*/

//VALIDO QUE LAS COTAS SEAN NÚMEROS Y QUE LA COTA INFERIOR SEA MENOR A LA COTA SUPERIOR

let validacionCotaInferior = false;
let validacionCotaSuperior = false;
let validacionIntervalo = false;

while(!validacionIntervalo) {
    while (!validacionCotaInferior) {
        var cotaInferior = parseInt(prompt('Ingresa la cota inferior'));
        isNaN(cotaInferior) ? alert('Por favor, ingresa números válidos para las cota INFERIOR') : validacionCotaInferior = true;
    }
    while(!validacionCotaSuperior) {
        var cotaSuperior = parseInt(prompt('Ingresa la cota superior'));
        isNaN(cotaSuperior) ? alert('Por favor, ingresa númerosidos para las cota SUPERIOR') : validacionCotaSuperior = true;
    }
    if (cotaInferior > cotaSuperior) {
        alert('La cota inferior debe ser menor a la cota superior. Vuelva a ingresar una cota SUPERIOR');
        validacionCotaSuperior = false;
    } else { validacionIntervalo = true};
}

let numeroSecreto = Math.floor(cotaInferior + Math.random() * (cotaSuperior - cotaInferior)+1);
let numeroUsuario = undefined;
let intentos = 0;
let maximosIntentos = 3;

console.log('Numero Secreto: ' + numeroSecreto);
console.log('Tipo Numero Secreto: ' + typeof(numeroSecreto));

console.log('Tipo Numero Usuario: ' + typeof(numeroUsuario));
console.log('Tipo Intentos: ' + typeof(intentos));

while (numeroUsuario != numeroSecreto) {
    let intentoValidadoNumero = false;
    let intentoValidadoCota = false;
    numeroUsuario = parseInt(prompt('Ingresa un numero entre ' + cotaInferior + ' y ' + cotaSuperior));
    intentos++;

    //VALIDACIONES DE NUMERO INGRESADO POR EL USUARIO
    isNaN(numeroUsuario) ? alert('ERROR: solo se aceptan números. Perdiste 1 intento') : intentoValidadoNumero = true;
    (numeroUsuario < cotaInferior || numeroUsuario > cotaSuperior) ? alert('ERROR: el numero debe estar entre ' + cotaInferior + ' y ' + cotaSuperior + '. Perdiste 1 intento') : intentoValidadoCota = true;
    
    console.log(`Intento ${intentos}: ` + 'Numero Usuario: ' + numeroUsuario);
    console.log('Tipo Numero Usuario after: ' + typeof(numeroUsuario));

    if (numeroUsuario === numeroSecreto && intentoValidadoNumero === true && intentoValidadoCota === true) {
        alert(`Ganaste el numero secreto era: ${numeroSecreto} y lo lograste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
    } else {
        //palabraIntentos= 'intentos';
        if (numeroUsuario > numeroSecreto && intentoValidadoNumero === true && intentoValidadoCota === true) {
            alert('El numero secreto es menor');
        } else if (numeroUsuario < numeroSecreto && intentoValidadoNumero === true && intentoValidadoCota === true) {
            alert('El numero secreto es mayor');
        } 
    }

    //Maxima cantidad de intentos
    if (intentos === maximosIntentos) {
        alert(`Perdiste, la mejor cantidad de intentos es ${maximosIntentos}`);
        break;
    }
}
