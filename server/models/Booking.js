import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  name: String,
  service: String,
  location: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Booking", BookingSchema);
