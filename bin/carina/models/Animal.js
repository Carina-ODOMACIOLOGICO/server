const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const AnimalSchema = new Schema({
 _id:{ type: String, default: "",}, 
 code:{ type: String, default: "",}, 
 nombre:{ type: String, default: "",}, 
 nombre_científico:{ type: String, default: "",}, 
 imagen:{ type: String, default: "",}, 
 descripcion:{ type: Array, default: [],}, 
});
 
var Animal = mongoose.model("Animal", AnimalSchema);
module.exports = Animal;