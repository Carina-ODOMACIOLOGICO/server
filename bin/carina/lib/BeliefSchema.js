const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BeliefSchema = new Schema({
  type: String,
  name: { type: String, unique: true, required: true },
  isA: {
    type: [Schema.Types.ObjectId],
    ref: "Belief",
    default: []
  },
  attributes: {
    hyponym: [
      {
        type: Schema.Types.ObjectId,
        ref: "Belief"
      }
    ],
    synonym: [
      {
        type: Schema.Types.ObjectId,
        ref: "Belief"
      }
    ],
    holonym: [
      {
        type: Schema.Types.ObjectId,
        ref: "Belief"
      }
    ],
    antonym: [
      {
        type: Schema.Types.ObjectId,
        ref: "Belief"
      }
    ],
    meronym: [
      {
        type: Schema.Types.ObjectId,
        ref: "Belief"
      }
    ]
  },
  numAtt: { type: Number, default: 0 },
  checked: {
    type: String,
    default: "unsanctioned"
  },
  isPartOfCompoundWord: Boolean,
  compounddWord: [
    {
      type: Schema.Types.ObjectId,
      ref: "Belief",
      default: null
    }
  ],
  isPartCompoundWord: [
    [
      {
        type: Schema.Types.ObjectId,
        ref: "Belief",
        default: null
      }
    ]
  ],
  has: {
    gender: {
      type: Schema.Types.ObjectId,
      ref: "Belief",
      default: null
    },
    number: {
      type: Schema.Types.ObjectId,
      ref: "Belief",
      default: null
    },
    sCgr: {
      type: Schema.Types.ObjectId,
      ref: "Belief",
      default: null
    },
    cgr: {
      type: Schema.Types.ObjectId,
      ref: "Belief",
      default: null
    },
    lema: {
      type: Schema.Types.ObjectId,
      ref: "Belief",
      default: null
    },
    links: [
      {
        type: Schema.Types.ObjectId,
        ref: "Belief"
      }
    ],
    img: {
      type: Schema.Types.ObjectId,
      ref: "Belief",
      default: null
    },
    sound: {
      type: Schema.Types.ObjectId,
      ref: "Belief",
      default: null
    },
    video: {
      type: Schema.Types.ObjectId,
      ref: "Belief",
      default: null
    }
  }
});

var Belief = mongoose.model("Belief", BeliefSchema);
module.exports = Belief;
