/*app.js Alexander Toscano Ricardo*/

var { Carina: CCarina } = require("../bin/carina/Carina");
let carina = new CCarina("3.0.0"); //no enviar version por constructor

const app = require("./middleware");

const http = require("http").Server(app);

require("./routes")({ app, carina });

const socket = require("./socket")({ http, app, carina });

module.exports = http;
