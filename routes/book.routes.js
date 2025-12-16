import * as controller from "../controller/book.controller.js";
import express from "express";
const bookrouter = express.Router();

bookrouter.post("/create", controller.createBook);

bookrouter.get("/get", controller.getBooks);
bookrouter.get("/get/:id", controller.getBookById);
bookrouter.put("/update/:id", controller.updateBook);
export default bookrouter;
