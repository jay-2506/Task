import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  comment: {
    type: String,
  },
  rating: {
    type: Number,
  },
  approved: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Comment", commentSchema);
