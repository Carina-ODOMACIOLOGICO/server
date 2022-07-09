/* Carina.js file  Alexander Toscano Ricardo */
var { Dataset: CDataset } = require("./bin/Dataset");
var document = require("./bin/Document");
//var { util } = require("./bin/Utilities");
var { databases } = require("./lib/Databases");
var { perception } = require("./bin/Perception");

/**
 * {{Carina}}
 * @version 3.0
 */
class Carina {
  /**
   * @param {string} v - this is a version.
   */
  constructor(v) {
    this._version = v;
  }

  onNewCorpus(data) {
    document.onNewCorpus(data);
  }

  onGetAllCorpus(data) {
    document.onGetAllCorpus(data);
  }

  getCorpusOfDocument(data) {
    document.getCorpusOfDocument(data);
  }

  addResolutions(data) {
    document.addResolutionsToDocument(data);
  }

  addCategory(data) {
    document.addCategory(data);
  }

  addArticles(data) {
    document.addArticles(data);
  }

  addIteration(data) {
    document.addIteration(data);
  }

  getResolutions(data) {
    document.getResolutions(data);
  }

  editResolutions(data) {
    document.editResolutions(data);
  }

  updateArticles(data) {
    document.updateArticles(data);
  }

  deleteArticles(data) {
    document.deleteArticles(data);
  }

  setDataset(data) {
    document.setDataset(data);
  }

  prediction(data) {
    perception.prediction(data);
  }

  predictionModels(data) {
    document.predictionModels(data);
  }

  addImages(data) {
    document.addImages(data);
  }

  addCSV(data) {
    document.addCSV(data);
  }

  setLinksOfDocument(data) {
    document.setLinksOfDocument(data);
  }
  setLink(data) {
    document.setLink(data);
  }
  getImages(data) {
    document.getImages(data);
  }

  setDetail(data) {
    document.setDetail(data);
  }

  onGetAllLinks(data) {
    document.onGetAllLinks(data);
  }

  getModel(data) {
    document.getModel(data);
  }

  train(data) {
    document.generateDataset(data);
  }

  getDataset(data) {
    document.getDataset(data);
  }
}

module.exports = { Carina };
