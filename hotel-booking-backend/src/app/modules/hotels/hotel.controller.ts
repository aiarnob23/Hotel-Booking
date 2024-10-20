import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { HotelServices } from "./hotel.service";

//add new Hotel
const addNewHotel = catchAsync(async (req, res) => {
  const result = await HotelServices.addNewHotel(req?.body);
   sendResponse(res, {
     success: true,
     statusCode: 200,
     data: result,
     message: "Hotel created successfully!",
   });
});

//get hotel by id
const getHotelById = catchAsync(async (req, res) => {
  const result = await HotelServices.getHotelById(req.params?.id);
  console.log(result);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    data: result,
    message: "Hotel details fetched successfully!",
  });
});

//find hotels
const getHotels = catchAsync(async (req, res) => {
  const result = await HotelServices.getHotels(req.query?.searchTerm);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    data: result,
    message: "Data fetched successfully!",
  });
});

//get top rated hotels
const getTopRateHotels = catchAsync(async (req, res) => {
  const result = await HotelServices.getTopRateHotels();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    data: result,
    message: "Data fetched successfully!",
  });
})

export const hotelControllers = {
  addNewHotel,
  getHotelById,
  getHotels,
  getTopRateHotels,
};
