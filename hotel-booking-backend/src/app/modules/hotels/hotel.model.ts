const mongoose = require("mongoose");

const roomTypeSchema = new mongoose.Schema({
  type: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const facilitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
});

const areaInfoSchema = new mongoose.Schema({
  nearby: { type: [String], required: true },
  restaurantsAndCafes: { type: [String], required: true },
  naturalBeauty: { type: [String], required: true },
  closestAirports: { type: [String], required: true },
});

const houseRulesSchema = new mongoose.Schema({
  checkIn: { type: String, required: true },
  checkOut: { type: String, required: true },
  additionalRules: { type: [String] },
});

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rooms: { type: [roomTypeSchema], required: true },
  images: { type: [String], required: true },
  facilities: { type: [facilitySchema], required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, required: true, min: 0, max: 5 },
  areaInfo: { type: areaInfoSchema, required: true },
  houseRules: { type: houseRulesSchema, required: true },
});

export const Hotel = mongoose.model("Hotel", hotelSchema);


