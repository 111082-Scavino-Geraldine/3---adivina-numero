const generarNumeroAleatorio = () => {
    //const numero_aleatorio = chance.integer({ min: 1, max: 100 }); --> otra forma de hacerlo con el módulo chance
    return Math.floor(Math.random() * 100) + 1;
};

const verificarAdivinanza = (numero_usuario, numero_aleatorio) => {
    if (numero_usuario != numero_aleatorio){
        if (numero_usuario < 1) {console.log('¡Ese número es demasiado bajo! Recuerda que debe ser entre 1 y 100\n');}
        if (numero_usuario > 100){console.log('¡Ese número es demasiado alto! Recuerda que debe ser entre 1 y 100\n');}
        if (numero_usuario >= 1 && numero_usuario <= 100){
            if (numero_usuario < numero_aleatorio) { console.log('El número que debes adivinar es mayor. ¡Sigue intentando!\n') }
            if (numero_usuario > numero_aleatorio) { console.log('El número que debes adivinar es menor. ¡Sigue intentando!\n') }
        }
    }
}

module.exports = {generarNumeroAleatorio,verificarAdivinanza};
