// models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  startup_Name: { type: String, required: false },
  owner_first_name: { type: String, required: false },
  owner_last_name: { type: String, required: false },
  category: { type: String, required: false },
  city: { type: String, required: false },
  state: { type: String, required: false },
  zip: { type: String, required: false },
  logInId: { type: String, required: false },
  password: { type: String, required: false },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
