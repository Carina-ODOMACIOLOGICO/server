const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IteracionSchema = new Schema({
  item: {
    type: Object,
    required: true,
  },
});

var Iteracion = mongoose.model("Iteracion", IteracionSchema);
module.exports = Iteracion;
