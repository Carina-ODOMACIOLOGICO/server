const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const ObjectId = mongoose.Types.ObjectId;const Test_1Schema = new Schema({
 _id:{ type: ObjectId,}, 
 _id:{ type: String, default: "",}, 
 code:{ type: String, default: "",}, 
 nombre:{ type: String, default: "",}, 
 nombre_científico:{ type: String, default: "",}, 
 imagen:{ type: String, default: "",}, 
 descripcion:{ type: Array, default: [],}, 
});
 
var Test_1 = mongoose.model("Test_1", Test_1Schema);
module.exports = Test_1;