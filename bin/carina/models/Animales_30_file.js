const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ObjectId = mongoose.Types.ObjectId;
const Animales_30_fileSchema = new Schema({
  _id: { type: ObjectId },
  _id: { type: String, default: "" },
  code: { type: String, default: "" },
  nombre: { type: String, default: "" },
  nombre_científico: { type: String, default: "" },
  imagen: { type: String, default: "" },
  descripcion: { type: Array, default: [] },
});

var Animales_30_file = mongoose.model("Animales_30_file", Animales_30_fileSchema);
module.exports = Animales_30_file;
