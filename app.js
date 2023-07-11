const Chance = require('chance');
const readlineSync = require("readline-sync");
const { generarNumeroAleatorio, verificarAdivinanza } = require('./adivinanza');

const chance = new Chance();

const obtenerNumeroUsuario = () => {
    //return readlineSync.question('Ingresa un número: ');
    process.stdout.write('El número es: '); //lo hice aparte porque readline-sync no reconoce caracteres especiales
    return readlineSync.question();
};
    
const juegoAdivinanza = () => {
    const numero_aleatorio = generarNumeroAleatorio();
    var numero_usuario = 0;
    console.log('¡Bienvenidx a Adivina el número!\n\nAdivina un número entre 1 y 100\n')
    while (numero_aleatorio != numero_usuario){
        numero_usuario = obtenerNumeroUsuario();
        verificarAdivinanza(numero_usuario,numero_aleatorio);
    }

    if (numero_aleatorio == numero_usuario) {
        console.log('¡Felicitaciones, Has adivinado el número!\n')
    }
}

juegoAdivinanza();