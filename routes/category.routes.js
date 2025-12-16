import express from "express";
import * as controller from "../controller/category.controller.js";

const categoryrouter = express.Router();

categoryrouter.post("/", controller.category);
export default categoryrouter;
