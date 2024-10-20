import express from 'express';
import { hotelControllers } from './hotel.controller';

const router = express.Router();

router.post('/add-hotel', hotelControllers.addNewHotel);
router.get(`/hotel-details/:id`, hotelControllers.getHotelById);
router.get('/find-hotels', hotelControllers.getHotels);
router.get('/top-rated', hotelControllers.getTopRateHotels);

export const hotelRoutes = router;