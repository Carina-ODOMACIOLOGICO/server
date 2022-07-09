var mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
class Database {
  constructor() {
    this.connect();
  }

  async connect() {
    try {
      //* amin_odomap@nqSSusgE4LVsnkvk
      await mongoose.connect("mongodb+srv://amin_odomap:nqSSusgE4LVsnkvk@cluster0.4klq5.mongodb.net/db_odomapp?retryWrites=true&w=majority", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
      });
      console.log("Connected databases.");
    } catch (e) {
      console.error(e);
    }
  }
}

/** export database */
exports.database = new Database();

/*await mongoose.connect("mongodb://localhost:27017/db_odomaapp", {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true,
      });
*/
