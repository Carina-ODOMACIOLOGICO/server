const mongoose = require("mongoose");
fs = require("fs");

/*var schema = {
  // schema for the data
};*/
var schema = "";

const parserFieldForSchema = (template, name) =>
  new Promise((resolve, reject) => {
    temp = JSON.parse(template);
    let result = {};

    try {
      for (const p in temp) {
        switch (temp[p]) {
          case "ObjectId":
            schema += `\n ${p}:{` + " type: ObjectId," + "}, ";
          case "textoAutogenerado":
            schema += `\n ${p}:{` + " type: String," + ' default: "",' + "}, ";
            break;
          case "textoVacio":
            schema += `\n ${p}:{` + " type: String," + ' default: "",' + "}, ";
            break;
          case "textoArchivo":
            schema += `\n ${p}:{` + " type: String," + ' default: "",' + "}, ";
            break;
          case "arregloVacio":
            schema += `\n ${p}:{` + " type: Array," + " default: []," + "}, ";
            break;
        }
      }
    } catch (error) {
      throw error;
    } finally {
      //let model = mongoose.model(name, schema);
      let file =
        'const mongoose = require("mongoose");\n' +
        "const Schema = mongoose.Schema;\n \n" +
        "const ObjectId = mongoose.Types.ObjectId;" +
        `const ${name}Schema = new Schema({` +
        schema +
        "\n});\n \n" +
        `var ${name} = mongoose.model("${name}", ${name}Schema);\n` +
        `module.exports = ${name};`;
      console.log(JSON.stringify(file, null, 2));
      fs.writeFile(`./bin/carina/models/${name}.js`, file, function (err) {
        if (err) reject(err);
        console.log("Esquema guardado");
        resolve(schema);
      });
    }
  });

module.exports = {
  parserFieldForSchema,
};
