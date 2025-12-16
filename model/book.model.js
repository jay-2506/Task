import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
  category: { type: mongoose.Schema.Types.ObjectId, 
    ref: "Category" 
  },
  author: { type: mongoose.Schema.Types.ObjectId,
     ref: "User"
     },
  status: {
    type: String,
    enum: ["DRAFT", "PUBLISHED"],
    default: "DRAFT",
  },
  rating: {
    type: Number,
    default: 0,
  },
  popularity: {
    type: Number,
    default: 0,
  },
  isApprove: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Book", bookSchema);
