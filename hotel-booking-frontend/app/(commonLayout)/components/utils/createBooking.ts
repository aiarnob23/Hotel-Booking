import { serverBaseUrl } from "@/app/lib/baseUrl"

export const createBooking = async (payload: any) => {
  console.log(payload);
    const res = await fetch(`${serverBaseUrl}/cart/create-booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    const data = await res.json();
    return data?.data;
}