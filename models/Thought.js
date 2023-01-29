const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      Date,
      default: Date.now,
    },
    userName: {
      String,
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
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thoughts", thoughtSchema);

module.exports = Thought;
