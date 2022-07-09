const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const ObjectId = mongoose.Types.ObjectId;const Animales_CordobaSchema = new Schema({
 _id:{ type: ObjectId,}, 
 _id:{ type: String, default: "",}, 
 code:{ type: String, default: "",}, 
 nombre:{ type: String, default: "",}, 
 nombre_científico:{ type: String, default: "",}, 
 imagen:{ type: String, default: "",}, 
 descripcion:{ type: Array, default: [],}, 
});
 
var Animales_Cordoba = mongoose.model("Animales_Cordoba", Animales_CordobaSchema);
module.exports = Animales_Cordoba;