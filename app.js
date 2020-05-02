//existen 3 tipo de require 

//1 paquetes nativos de node
//const fs = require('fs');
//paquetes que no son nativosde node
//const fs = require('express');
//3.-Son archivos de nosotros
//const fs = require('./fs');


const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(err => console.log(err));
        break;
    default:

}

//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];




/*
fs.writeFile(`tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base}.txt ha sido creado`);
});
*/