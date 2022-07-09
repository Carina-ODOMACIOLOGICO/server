/*routes_sockets.js Alexander Toscano Ricardo*/

module.exports = function (params) {
  ({ app, socket, carina } = params);

  /* Deprecated */
  /*
  app.post("/setDataset/:idDocument", (req, res) => {
    let { idDocument } = req.params;
    let { nameTrain, testrain } = req.body;
    carina.setDataset({ idDocument, nameTrain, testrain, socket });
    res.send({ status: 200 });
  });
  */

  app.post("/train/:id_documento", (req, res) => {
    let { id_documento } = req.params;
    let { dataTrain, nameTrain, fields, testrain } = req.body;
    carina.train({
      id_documento,
      nameTrain,
      dataTrain,
      testrain,
      fields,
      socket,
    });
    res.send({ status: 200 });
  });
};
