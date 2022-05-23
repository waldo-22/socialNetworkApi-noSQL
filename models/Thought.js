const { Schema, model } = require('mongoose');
const reactionSchema = require("./Reaction");
const dateFormat = require('dateformat');


// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxLength: 280,
      minlength: 1
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: createdAtVal => dateFormat(createdAtVal, "mmm dS, yyyy 'at' hh:MMtt")
    },
    userName: {
      type: String,
      required: true,      
    },
      reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
