const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create user model
const userSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // match valid email address
    },
    thoughts: {
      type: Schema.Types.ObjectId, 
      ref: "thought",
    },
    friends: {
      type: Schema.Types.ObjectId, 
      ref: "user",
    },
    // reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;
