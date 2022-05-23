const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    userName: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // get: createdAtVal => dateFormat(createdAtVal, "mmm dS, yyyy 'at' hh:MMtt")
    },
    id: false,
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

module.exports = reactionSchema;
