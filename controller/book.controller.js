import book from "../model/book.model.js";

export const createBook = async (req, res) => {
  try {
    const { title, description, content, category, author } = req.body;
    const newBook = new book({
      title,
      description,
      content,
      category,
      author,
    });
    await newBook.save();
    res
      .status(201)
      .json({ message: "Book created successfully", book: newBook });
  } catch (error) {
    res.status(500).json({ message: "Error creating book", error });
  }
};
// Get all books
export const getBooks = async (req, res) => {
  try {
    const books = await book.find().populate("category").populate("author");
    res.status(200).json({ books });
  } catch (error) {
    res.status(500).json({ message: "Error fetching books", error });
  }
};
// Get book by ID
export const getBookById = async (req, res) => {
  try {
    const bookItem = await book
      .findById(req.params.id)
      .populate("category")
      .populate("author");
    if (!bookItem) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ book: bookItem });
  } catch (error) {
    res.status(500).json({ message: "Error fetching book", error });
  }
};
// Update book
export const updateBook = async (req, res) => {
  try {
    const bookItem = await book.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
        content: req.body.content,
        category: req.body.category,
        author: req.body.author,
      },
      { new: true }
    );
    if (!bookItem) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ book: bookItem });
  } catch (error) {
    res.status(500).json({ message: "Error updating book", error });
  }
};

// delete book
export const deleteBook = async (req, res) => {
  try {
    const bookItem = await book.findByIdAndDelete(req.params.id);
    if (!bookItem) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Bookn Delete succesfully" });
  } catch (error) {
    res.status(500).json({ message: "book deleting ", error });
  }
};
