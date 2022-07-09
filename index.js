/*server.js Alexander Toscano Ricardo*/
const http = require("./lib/app");

var server_port = process.env.YOUR_PORT || process.env.PORT || 5000;
var server_host = process.env.YOUR_HOST || "0.0.0.0";
global.hostServer = `${server_host}:${server_port}`;

http.listen(server_port, server_host, function () {
  console.log(`server is running on  ${server_host}:${server_port}`);
});

/*
  git add .
  git commit -m ""
  git push origin master
  git push heroku master
  heroku ps:scale web=1
  heroku open
  heroku logs --tail
*/
