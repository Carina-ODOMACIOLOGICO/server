/*routes.js Alexander Toscano Ricardo*/

const multer = require("multer");

module.exports = function (params) {
  ({ app, carina } = params);

  // getters
  app.get("/version", function (req, res) {
    res.send({ name: "Carina", version: carina._version });
  });

  app.get("/onGetAllCorpus", function (req, res) {
    carina.onGetAllCorpus({ res });
  });

  app.get("/getCorpusOfDocument/:idDocument/:model", (req, res) => {
    let { idDocument, model } = req.params;
    carina.getCorpusOfDocument({ idDocument, model, res });
  });

  app.get("/getResolutions/:idDocument", (req, res) => {
    let { idDocument } = req.params;
    carina.getResolutions({ idDocument, res });
  });

  // setters
  app.post("/onNewCorpus/", (req, res) => {
    //let { idClient } = req.params;
    let documento = req.body;
    carina.onNewCorpus({ documento, res });
  });

  /**
   * ! no se utilizará este método y se implementará un metodo génerico
   * Este método se utiliza para agregar una resolucion a un documento, pero en realidad se debe utilizar un esquema generico para alimentar los datasets
   */
  app.post("/addResolutions/:idDocument", (req, res) => {
    let { idDocument } = req.params;
    let { resolutionsAct } = req.body;
    carina.addResolutions({ resolutionsAct, idDocument, res });
  });

  /**
   * TODO: Reemplaza el metodo de adicionar resoluciones por adicionar categorias
   * * Adicionar una iteracion al corpus de tipo schema
   */
  app.post("/corpus/:id/iterations", (req, res) => {
    let { id } = req.params;
    let { iteracion, name, template } = req.body;
    carina.addIteration({ iteracion, id, name, template, res });
  });

  app.post("/addCategory/:idDocument", (req, res) => {
    let { idDocument } = req.params;
    let { resolutionsAct } = req.body;
    carina.addCategory({ resolutionsAct, idDocument, res });
  });

  app.post("/addResolutions/:idDocument", (req, res) => {
    let { idDocument } = req.params;
    let { resolutionsAct } = req.body;
    carina.addResolutions({ resolutionsAct, idDocument, res });
  });

  app.post("/addArticles/:idResolution", (req, res) => {
    let { idResolution } = req.params;
    let { editedItem } = req.body;
    console.log(editedItem);
    carina.addArticles({ editedItem, idResolution, res });
  });

  app.post("/deleteArticles/:idResolution/:_id", (req, res) => {
    let { _id, idResolution } = req.params;
    carina.deleteArticles({ idResolution, _id, res });
  });

  /*
  app.post("/setTrain/:idDataset", (req, res) => {
    let { idDataset } = req.params;
    let { dataset } = req.body;
  });
  */

  app.post("/prediction/:idDataset", (req, res) => {
    let { idDataset } = req.params;
    let { query } = req.body;
    carina.prediction({ idDataset, query, res });
  });

  // updates
  app.post("/updateArticles/:idResolution", (req, res) => {
    let { idResolution } = req.params;
    let { editedItem } = req.body;

    carina.updateArticles({ editedItem, res });
  });

  app.post("/editResolutions/:idResolutions", (req, res) => {
    let { idResolutions } = req.params;
    let { resolutionsAct } = req.body;
    carina.editResolutions({ resolutionsAct, idResolutions, res });
  });

  app.get("/images/:schema/:rango/:orden", (req, res) => {
    let { schema, rango, orden } = req.params;
    carina.getImages({ schema, rango, orden, res });
  });

  app.post("/images", (req, res) => {
    carina.addImages({ req, res });
  });

  app.post("/csv", (req, res) => {
    carina.addCSV({ req, res });
  });

  app.post("/setLinksOfDocument/:id_document", (req, res) => {
    let { id_document } = req.params;
    let { link } = req.body;
    carina.setLinksOfDocument({ link, id_document, res });
  });

  app.get("/links/:id_document/:id_link/", (req, res) => {
    let { id_document, id_link } = req.params;
    carina.setLink({ id_document, id_link, res });
  });

  app.post("/detail/:schema/:id", (req, res) => {
    let { schema, id } = req.params;
    let { detail } = req.body;
    carina.setDetail({ schema, id, detail, res });
  });

  app.get("/onGetAllLinks", function (req, res) {
    carina.onGetAllLinks({ res });
  });

  app.get("/models/:id_document/:model", function (req, res) {
    let { id_document, model } = req.params;
    carina.getModel({ id_document, model, res });
  });

  app.get("/dataset/:id_document/:model", function (req, res) {
    let { id_document, model } = req.params;
    carina.getDataset({ id_document, model, res });
  });

  app.post("/prediction/:idDataset/:model", function (req, res) {
    let { idDataset, model } = req.params;
    let { id_document, query } = req.body;
    carina.prediction({ id_document, idDataset, model, query, res });
  });

  app.post("/predictionModels/:id_document/:model", function (req, res) {
    let { id_document, model } = req.params;
    let { prediction } = req.body;
    carina.predictionModels({ id_document, model, prediction, res });
  });
};
