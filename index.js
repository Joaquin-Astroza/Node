const { registrar, leer } = require("./operaciones");

let operacion = process.argv[2];
let Nombre = process.argv[3];
let Edad = process.argv[4];
let Tipo = process.argv[5];
let Color = process.argv[6];
let Enfermedad = process.argv[7];



if (operacion === "registrar") {
    registrar(Nombre, Edad, Tipo, Color, Enfermedad);
  }
if (operacion === "leer") {
    leer();
  }
