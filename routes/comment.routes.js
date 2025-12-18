import express from "express";
import  {addComment}  from "../controller/comment.controller.js";

const router = express.Router();


router.post("/", addComment);

export default router;
