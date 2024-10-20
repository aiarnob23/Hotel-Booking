import { createToken } from "../../middlewares/token";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { userServices } from "./user.services";


const createUser = catchAsync(async (req, res) => {
    console.log(req?.body);
    const result = await userServices.createNewUser(req?.body);
    const token = createToken(req?.body);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        data: { result, token },
        message:"User logged in successfully!"
    })
    
})


export const userController = {
    createUser,
}