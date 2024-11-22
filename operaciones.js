const fs = require("fs");
const registrar = (Nombre, Edad, Tipo, Color, Enfermedad) => {
  const lista = fs.readFileSync("citas.json", "utf-8");
  const listaparse = JSON.parse(lista);
  listaparse.push({ Nombre, Edad, Tipo, Color, Enfermedad });
  fs.writeFileSync("citas.json", JSON.stringify(listaparse));
};

const leer = () => {
  const lista = fs.readFileSync("citas.json", "utf-8");
  console.log(lista);
};

module.exports={registrar, leer};
