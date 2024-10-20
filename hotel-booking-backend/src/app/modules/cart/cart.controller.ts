import { verifyToken } from "../../middlewares/token";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { cartService } from "./cart.service";


const newBooking = catchAsync(async (req, res) => {
    console.log(req.body);
    const result = await cartService.newBooking(req?.body);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        data: result,
        message:"Booking created successfully!",
    })
})

const getUserBooking = catchAsync(async (req, res) => {
    console.log('booking cahitese vai...');
    const token = req?.headers?.authorization || null; 
    console.log(token);
    const payload : any = verifyToken(token);
    const result = await cartService.getUserBooking(payload?.data?.email);
     sendResponse(res, {
       success: true,
       statusCode: 200,
       data: result,
       message: "Booking fetched successfully!",
     });
})

export const cartController = {
    newBooking,
    getUserBooking,
}