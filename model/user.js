import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true, // Ensure the email is unique
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Check if the model is already defined (for server-side rendering in Next.js)
const User = mongoose.models.User || model("User", userSchema);

export default User;
