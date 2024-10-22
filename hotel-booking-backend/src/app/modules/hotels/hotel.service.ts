import { THotel } from "./hotel.interface";
import { Hotel } from "./hotel.model";

//add new hotel
const addNewHotel = async (payload: THotel) => {
  const result = await Hotel.create(payload);
  return result;
};

//find hotel by id
const getHotelById = async (id: any) => {
  const result = await Hotel.findById(id);
  return result;
};

//find hotels
const getHotels = async (searchTerm: any) => {
  console.log(searchTerm);
  const query: any = {};
  if (searchTerm) {
    query.$or = [
      { name: { $regex: searchTerm, $options: "i" } },
      { location: { $regex: searchTerm, $options: "i" } },
    ];
  }

  const result = await Hotel.find(query, {name:1, location:1, images:1});
  console.log(result);
  return result;
};

//get top rated hotels
const getTopRateHotels = async () => {
  const result = await Hotel.find().sort({ rating: -1 }).limit(6);
  return result;
};

export const HotelServices = {
  addNewHotel,
  getHotelById,
  getHotels,
  getTopRateHotels,
};
