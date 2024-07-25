// models/User.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  startup_Name: {
    type: String,
    required: true,
    unique: true,
  },
  owner_first_name: {
    type: String,
    required: true,
  },
  owner_last_name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  logInId: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
