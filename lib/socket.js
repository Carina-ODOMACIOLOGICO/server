/*socket.js Alexander Toscano Ricardo*/

module.exports = (params) => {
  ({ http, app, carina } = params);

  const io = require("socket.io")(http, {
    cors: {
      origin: "http://localhost:8080",
    },
  });

  io.on("connection", (socket) => {
    console.log("Socket.js");
    require("./routes_sockets")({ app, socket, carina });

    socket.on("getVersion", () => {
      socket.emit("onVersion", { name: "Server", version: "1.0.0" });
    });

    socket.on("disconnect", (reason) => {
      if (reason === "io server disconnect") {
        socket.connect();
      }
    });
  });
};
