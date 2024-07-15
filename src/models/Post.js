const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  text: { type: String, required: true },
});

const PostSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  text: { type: String, required: true },
  likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  comments: [CommentSchema],
});

module.exports = mongoose.model("Post", PostSchema);
