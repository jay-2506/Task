import Comment from "../model/comment.model.js";
import Book from "../model/book.model.js";

//   Reader → Add comment (goes to pending state)

export const addComment = async (req, res) => {
  try {
    const { book, rating, status } = req.body;

    const comment = await Comment.create({
      book: book,
      // user: req.user._id,
      // text,
      rating,
      status,
    });

    res.status(201).json({
      message: "Comment submitted for approval",
      comment,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//   Author → View pending comments for own books

export const getPendingComments = async (req, res) => {
  try {
    const books = await Book.find({ author: req.user._id }).select("_id");

    const comments = await Comment.find({
      book: { $in: books },
      status: "PENDING",
    })
      .populate("user", "name")
      .populate("book", "title");

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//  Author → Approve comment

export const approveComment = async (req, res) => {
  try {
    const { id } = req.params;

    const comment = await Comment.findByIdAndUpdate(
      id,
      { status: "APPROVED" },
      { new: true }
    );

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.json({ message: "Comment approved", comment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//  Author → Reject comment

export const rejectComment = async (req, res) => {
  try {
    const { id } = req.params;

    const comment = await Comment.findByIdAndUpdate(
      id,
      { status: "REJECTED" },
      { new: true }
    );

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.json({
      message: "Comment rejected",
      comment,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getApprovedComments = async (req, res) => {
  try {
    const { bookId } = req.params;

    const comments = await Comment.find({
      book: bookId,
      status: "APPROVED",
    }).populate("user", "name");

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
