import express from 'express';
import { cartController } from './cart.controller';

const router = express.Router();

router.post('/create-booking', cartController.newBooking);
router.get('/user-bookings', cartController.getUserBooking);

export const cartRoutes = router;