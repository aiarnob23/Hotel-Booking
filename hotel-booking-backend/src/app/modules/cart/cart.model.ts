import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  email: String,
  name: String,
  checkIn: String,
  checkOut: String,
  selectedRoomType: Object,
  rooms: Number,
  adults: Number,
  children: Number,
  total: Number,
});

export const Cart = mongoose.model("Cart", cartSchema);