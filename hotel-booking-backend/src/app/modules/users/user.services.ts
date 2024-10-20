
import { TUser } from "./user.interface";
import { User } from "./user.model";


const createNewUser = async (payload: TUser) => {
    //checking if user is already exists
    const result = await User.find({ email: payload.email });
    console.log(result);
    if (!result.length) {
        const result = await User.create(payload);
        return result;
    }
    else {
        return payload;
    }
}

export const userServices = {
    createNewUser,
}