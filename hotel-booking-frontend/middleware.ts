import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  const email = cookies().get("email");
  const token = cookies().get("accessToken");
  const { pathname } = request.nextUrl;
  if (pathname === "/bookings") {
    if (email && token) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/bookings"],
};
