// server/routes/bookingRoutes.js
import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

// 🛡️ Dummy Admin Middleware (expand later if needed)
const isAdmin = (req, res, next) => {
  // In real life, check req.user.role === "admin"
  next(); // Allow for now
};

// 📥 Save new booking
router.post("/", async (req, res) => {
  try {
    const { name, service, location } = req.body;
    const booking = new Booking({ name, service, location });
    await booking.save();
    res.status(201).json({ message: "Booking saved", booking });
  } catch (error) {
    console.error("Save Booking Error:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

// 📤 Get all bookings (Admin or Dashboard view)
router.get("/", isAdmin, async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    console.error("Get Bookings Error:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

// ❌ Delete booking
router.delete("/:id", isAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Booking.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.json({ message: "Booking deleted" });
  } catch (error) {
    console.error("Delete Booking Error:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

// 🔄 (Optional) Update booking
router.put("/:id", isAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Booking.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.json({ message: "Booking updated", updated });
  } catch (error) {
    console.error("Update Booking Error:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

export default router;
