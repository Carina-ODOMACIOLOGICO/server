const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const ObjectId = mongoose.Types.ObjectId;const Odomac_4Schema = new Schema({
 _id:{ type: ObjectId,}, 
 _id:{ type: String, default: "",}, 
 code:{ type: String, default: "",}, 
 nombre:{ type: String, default: "",}, 
 nombre_científico:{ type: String, default: "",}, 
 imagen:{ type: String, default: "",}, 
 descripcion:{ type: Array, default: [],}, 
});
 
var Odomac_4 = mongoose.model("Odomac_4", Odomac_4Schema);
module.exports = Odomac_4;