import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  emial: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    enum: ["READER", "AUTHER"],
    default: "READER",
  },
});

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = bcrypt.hash(this.password, 10);
});
export default mongoose.model("User", userSchema);
