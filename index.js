import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/auth.routes.js";
import categoryrouter from "./routes/category.routes.js";
import bookrouter from "./routes/book.routes.js";
import commentRouter from "./routes/comment.routes.js";
const app = express();
app.use(express.json());
dotenv.config();
connectDB();

app.use("/api", router);
app.use("/category", categoryrouter);
app.use("/", bookrouter);
app.use("/comment",commentRouter)

app.use("/health", async (req, res) => {
  res.send("Jay From This Side");
});
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server run on port  ${PORT}`);
});
