import { TCart } from "./cart.interface";
import { Cart } from "./cart.model";


const newBooking = async (payload: TCart) => {
    const result = await Cart.create(payload);
    return result;
}

const getUserBooking = async (email:any) => {
    const result = await Cart.find({ email: email });
    return result;
}


export const cartService = {
    newBooking,
    getUserBooking,
}