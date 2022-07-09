const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const ObjectId = mongoose.Types.ObjectId;const Animales_testSchema = new Schema({
 _id:{ type: ObjectId,}, 
 _id:{ type: String, default: "",}, 
 code:{ type: String, default: "",}, 
 nombre:{ type: String, default: "",}, 
 nombre_científico:{ type: String, default: "",}, 
 imagen:{ type: String, default: "",}, 
 descripcion:{ type: Array, default: [],}, 
});
 
var Animales_test = mongoose.model("Animales_test", Animales_testSchema);
module.exports = Animales_test;