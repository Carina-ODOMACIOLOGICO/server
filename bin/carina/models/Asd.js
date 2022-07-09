const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const ObjectId = mongoose.Types.ObjectId;const AsdSchema = new Schema({
 _id:{ type: ObjectId,}, 
 _id:{ type: String, default: "",}, 
 code:{ type: String, default: "",}, 
 nombre:{ type: String, default: "",}, 
 nombre_científico:{ type: String, default: "",}, 
 imagen:{ type: String, default: "",}, 
 descripcion:{ type: String, default: "",}, 
});
 
var Asd = mongoose.model("Asd", AsdSchema);
module.exports = Asd;