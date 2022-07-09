var mongoose = require("mongoose");
const { Schema } = mongoose;
var OId = require("mongoose").Types.ObjectId;
var resolution = require("./Resolution");
var { Dataset: CDataset } = require("./Dataset");
const Documento = require("../models/Documento");
const Iteracion = require("../models/Iteracion");
const Problem_Space = require("../models/Problem_Space");
const ProblemSpace = require("../models/Problem_Space");
const _ = require("lodash");
const async = require("async");
var csv = require("csv-parse");
var csvtojson = require("csvtojson");
const dp = require("./DataParser");
const ds = require("./DataSchema");

class Document {
  constructor() {
    this.dataset = new CDataset();
  }

  onNewCorpus(data) {
    let { documento, res } = data;

    Documento.create(documento)
      .then(function (doc) {
        console.log("documento creado");
        res.send({ status: 200, doc });
      })
      .catch(function (err) {
        console.log(err);
        res.send({ status: 200, err });
      });
  }

  onGetAllCorpus(data) {
    let { res } = data;
    Documento.find({}, function (err, newCorpus) {
      if (err) throw err;
      let corpus = [];

      newCorpus.map((item) => corpus.push({ id: item._id, nombre: item.nombre, schema: item.schema }));
      res.send({ status: 200, corpus });
    });
  }

  getCorpusOfDocument(data) {
    let { idDocument, model, res } = data;
    require(`../models/${model}`);
    Documento.findOne({ _id: idDocument })
      .populate({
        path: "iteraciones",
        model: model,
      })
      .exec(function (err, corpus) {
        if (err) throw err;
        res.send({ status: 200, corpus });
      });
  }

  addResolutionsToDocument(data) {
    let { resolutionsAct, idDocument, res } = data;
    resolution.addResolutions({ resolutionsAct, idDocument, Documento, res });
  }

  getResolutions(data) {
    let { idDocument, res } = data;
    Documento.findOne({ _id: idDocument })
      .populate({
        path: "resoluciones",
        populate: {
          path: "articulos",
          model: "Articulo",
        },
      })
      .exec(function (err, corpus) {
        if (err) throw err;
        let { resoluciones } = corpus;
        Problem_Space.findOne({ idDocument: idDocument })
          .select("_id")
          .populate({
            path: "has",
            select: "_id name",
          })
          .exec(function (err, problemSpace) {
            let learningDatasets = [];
            if (err) throw err;
            if (problemSpace != null) learningDatasets = problemSpace.has;
            res.send({ status: 200, resoluciones, learningDatasets });
          });
      });
  }

  generateDataset(data) {
    let { fields, id_documento, dataTrain, nameTrain, testrain, socket, cm } = data;
    let datasetTemp = [];
    socket.emit("initTrain", {});
    async
      .eachOfSeries(dataTrain, (item, i, cbd) => {
        datasetTemp.push([item[fields[0].text], item[fields[1].text]]);
        cbd();
      })
      .then(() => {
        socket.emit("addItem", {
          train: true,
          title: "Iniciando entrenamiento",
          text: `Procesando. ${datasetTemp.length} registros encontrados`,
          color: "blue",
          progress: 0,
        });

        var test = (datasetTemp.length * testrain) / 100;
        var datasetTest = datasetTemp.splice(0, Math.trunc(test));

        data.idDocument = id_documento;
        data.datasetTemp = datasetTemp;
        data.datasetTest = datasetTest;
        data.name = nameTrain;

        socket.emit("addItem", {
          train: true,
          title: "Preparando dataset",
          progress: 1,
          color: "blue",
          text: `Obteniendo dataset de datos. ${datasetTemp.length} registros encontrados`,
          progress: 0,
        });
        this.dataset.onUploadCorpus(data);
      });
  }

  setDataset(data) {
    let { idDocument, nameTrain, testrain, socket } = data;
    let self = this;
    Documento.findOne({ _id: idDocument })
      .populate({
        path: "resoluciones",
        populate: {
          path: "articulos",
          model: "Articulo",
          select: "_id texto",
        },
      })
      .exec(function (err, corpus) {
        if (err) throw err;
        let { resoluciones } = corpus;
        var dsTemp = Array.prototype.concat(
          ...resoluciones.map((a) => a.articulos.map((b) => (OId.isValid(!b._id) ? [b._id, b.texto] : [b.texto, b._id])))
        );
        var test = (dsTemp.length * testrain) / 100;
        var dsTest = dsTemp.splice(0, Math.trunc(test));

        data.idDocument = idDocument;
        data.datasetTemp = dsTemp;
        data.datasetTest = dsTest;
        data.name = nameTrain;
        self.dataset.onUploadCorpus(data);

        socket.emit("addItem", {
          color: "green",
          text: `Obteniendo dataset de datos. ${dsTemp.length} registros encontrados`,
          status: true,
        });
      });
  }

  addIteration(data) {
    let self = this;
    try {
      let { id, iteracion, addIteration, name, template, res } = data;
      name = name.charAt(0).toUpperCase() + name.slice(1);
      Documento.findOne({ _id: id }).exec(function (err, doc) {
        if (err) throw err;

        ds.parserFieldForSchema(template, name)
          .then((schema) => {
            const Model = require(`../models/${name}`);

            Model.insertMany(iteracion).then(function (items) {
              console.log("datos de modelo guardados");
              doc
                .update({
                  schema: name,
                  $addToSet: {
                    iteraciones: { $each: items.map((a) => a._id) },
                  },
                })
                .exec(function (err, doc) {
                  if (err) throw err;
                  res.send({ status: 200, doc });
                });
            });
          })
          .catch((err) => {
            res.send({ status: 200, err });
          });
      });
    } catch (error) {
      res.send({ status: 200, error });
    }
  }

  async addImages(data) {
    let { req, res } = data;
    let imagesData = [];
    let files = req.files.data;
    let template = JSON.parse(req.body.template);

    try {
      if (!req.files) {
        res.send({
          status: false,
          message: "No file uploaded",
        });
      } else {
        async
          .eachOfSeries(files, (file, i, cb) => {
            let t = dp.parserFieldFromTemplate(template);

            file.mv("./public/uploads/" + t.imagen, function (err) {
              if (err) {
                throw err;
              }
              imagesData.push(t);
              cb();
            });
          })
          .then(() => {
            res.send({
              status: true,
              message: "Files are uploaded",
              data: imagesData,
            });
          });
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async addCSV(data) {
    let { req, res } = data;
    let arr_words = [];
    let files = req.files.data;
    let template = JSON.parse(req.body.template);

    try {
      if (!req.files) {
        res.send({
          status: false,
          message: "No file uploaded",
        });
      } else {
        let csv_data = files.data.toString().split("\n");

        async
          .eachOfSeries(csv_data, (row, i, cb) => {
            let r = row.split(",");
            let t = dp.parserFieldFromTemplate(template);
            t.embera = r[0];
            t.espanol = r[1];
            arr_words.push(t);
            cb();
          })
          .then(() => {
            res.send({
              status: true,
              message: "Files are uploaded",
              data: arr_words,
            });
          });
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }

  setLinksOfDocument(data) {
    let { link, id_document, res } = data;
    Documento.findOneAndUpdate(
      { _id: id_document },
      {
        $addToSet: {
          links: link,
        },
      }
    ).exec(function (err, doc) {
      if (err) throw err;
      res.send({ status: 200, doc });
    });
  }

  setLink(data) {
    let { id_link, id_document, res } = data;
    let link = `/filldata/${id_document}/${id_link}`;
    Documento.findOne({
      _id: id_document,
      links: { $elemMatch: { url: link } },
    })
      .select("links schema")
      .exec(function (err, doc) {
        if (err) throw err;
        if (doc) {
          res.send({ status: 200, doc });
        } else {
          res.send({ status: 200, message: "Error con la" });
        }
      });
  }

  getImages(data) {
    let { schema, rango, orden, res } = data;
    let Model = require(`../models/${schema}`);
    let images = [];
    let self = this;

    Model.find({})
      .select("_id imagen nombre nombre_científico")
      .exec(function (err, docs) {
        if (err) throw err;
        if (docs.length > 0) {
          let docs_shuffled = _.shuffle(docs);
          let images = docs_shuffled.map((a) => a.imagen);
          let id_images = docs_shuffled.map((a) => a._id);
          res.send({ status: 200, images, id_images, docs_shuffled });
        }
      });
  }

  setDetail(data) {
    let { schema, id, detail, res } = data;
    let Model = require(`../models/${schema}`);
    Model.update(
      { _id: id },
      {
        $addToSet: {
          descripcion: detail,
        },
      }
    ).exec(function (err, doc) {
      if (err) throw err;

      res.send({ status: 200, doc });
    });
  }

  onGetAllLinks(data) {
    let { res } = data;
    Documento.find()
      .select("_id nombre detalle links")
      .exec(function (err, corpus) {
        if (err) throw err;
        res.send({ status: 200, corpus });
      });
  }

  getModel(data) {
    let { id_document, model, res } = data;
    let Model = require(`../models/${model}`);

    Documento.findOne({ _id: id_document })
      .populate({
        path: "iteraciones",
        model: model,
      })
      .exec(function (err, document) {
        if (err) throw err;
        let modelFields = Object.keys(Model.schema.paths);
        res.send({ status: 200, document, modelFields });
      });
  }

  getDataset(data) {
    let { id_document, model, res } = data;
    let Model = require(`../models/${model}`);
    let props = Object.keys(Model.schema.paths);

    ProblemSpace.findOne({ idDocument: id_document })
      .populate({
        path: "has",
        model: "LearningDataset",
      })
      .exec(function (err, doc) {
        if (err) throw err;
        res.send({ status: 200, doc, props });
      });
  }

  predictionModels(data) {
    let { id_document, model, prediction, res } = data;
    let Model = require(`../models/${model}`);
    let id_predictions = prediction.map((p) => p.label);

    Documento.findOne({ _id: id_document })
      .populate({
        path: "iteraciones",
        model: model,
        match: {
          _id: { $in: id_predictions },
        },
        select: "nombre nombre_científico imagen",
      })
      .exec(function (err, collection) {
        if (err) throw err;

        let detail = prediction.map((orden) => {
          return collection.iteraciones.find((x) => x._id === orden.label);
        });

        res.send({ status: 200, result: { prediction, detail } });
      });
  }

  train(data) {
    let { id_document, dataTrain, res } = data;
    // console.log(dataTrain, id_document);
  }

  addArticles(data) {
    resolution.addArticles(data);
  }

  updateArticles(data) {
    resolution.updateArticles(data);
  }

  editResolutions(data) {
    resolution.editResolutions(data);
  }

  deleteArticles(data) {
    resolution.deleteArticles(data);
  }

  getRandomArbitrary(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
  }
}

module.exports = new Document();
