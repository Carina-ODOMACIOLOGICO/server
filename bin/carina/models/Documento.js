const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DocumetoSchema = new Schema({
  nombre: {
    type: String,
  },
  detalle: {
    type: String,
  },
  schema: {
    type: String,
  },
  vida: {
    type: Number,
  },
  links: {
    type: [Object],
    default: undefined,
  },
  iteraciones: {
    type: [String],
    default: undefined,
  },
});

var Documento = mongoose.model("Documento", DocumetoSchema);
module.exports = Documento;
