import { serverBaseUrl } from "@/app/lib/baseUrl";
import Cookies from "js-cookie";

//get cart orders
export async function getBookings() {
  const accessToken = Cookies.get("accessToken");
  const res = await fetch(`${serverBaseUrl}/cart/user-bookings`, {
    method: "GET",
    headers: {
      Authorization: `${accessToken}`,
      "Content-Type": "application/json",
    },
  });

    const data = await res.json();
    return data?.data;
}
