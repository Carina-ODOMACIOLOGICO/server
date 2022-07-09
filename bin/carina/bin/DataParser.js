const OId = require("mongoose").Types.ObjectId;
const { v4: uuidv4 } = require("uuid");

const ObjectId = () => new OId.ObjectId();
const autogenerado = () => uuidv4();
const vacio = () => "";
const archivo = () => `${uuidv4()}.jpeg`;
const arreglo = () => [];

const parserFieldFromTemplate = (template) => {
  template = JSON.parse(template);
  let result = {};
  try {
    for (const p in template) {
      switch (template[p]) {
        case "ObjectId":
          result[p] = ObjectId();
          break;
        case "textoAutogenerado":
          result[p] = autogenerado();
          break;
        case "textoVacio":
          result[p] = vacio();
          break;
        case "textoArchivo":
          result[p] = archivo();
          break;
        case "arregloVacio":
          result[p] = arreglo();
          break;
      }
    }
  } catch (error) {
    throw error;
  } finally {
    console.log(JSON.stringify(result, null, 2));
    return result;
  }
};

module.exports = {
  parserFieldFromTemplate,
};
