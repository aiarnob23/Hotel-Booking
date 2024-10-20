import jwt from "jsonwebtoken";
import config from "../config";


export const createToken = (palyload:any) => {
    const token = jwt.sign(
        {
            data:palyload,
        },
        config.secret as string,
        {
            expiresIn:'7d'
        }
    )

    return token;
}



export const verifyToken = (token:any) => {
    try {
        var decoded = jwt.verify(token, config.secret as string);
        return decoded;
    } catch (err) {
      console.log(err);
    }
}