import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { hotelRoutes } from "./app/modules/hotels/hotel.route";
import { userRoutes } from "./app/modules/users/user.route";
import { cartRoutes } from "./app/modules/cart/cart.route";


const app: Application = express();

// cors and middlewares for data
app.use(cookieParser());
app.use(express.json());
app.use(
  cors()
);

//routes
app.use("/api/v1/hotel", hotelRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/cart", cartRoutes);
app.get("/", (req: Request, res: Response) => {
  res.send("Hotel booking server site");
});


export default app;
