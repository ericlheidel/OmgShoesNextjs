import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export default function middleware(req) {
  // Get cookies from the request
  const cookieStore = cookies(req)
  const authCookie = cookieStore.get("OmgShoesLoginCookie")

  // Check if the authentication cookie exists
  if (!authCookie) {
    // Redirect to login if no cookie is found
    console.log("No auth cookie found, redirecting to /login")
    return NextResponse.redirect(new URL("/login", req.url))
  }

  // Continue to the requested page if the cookie is present
  console.log("Cookie found")
  return NextResponse.next()
}

// Middleware configuration
export const config = {
  matcher: ["/((?!login|api|_next).*)"], // Apply middleware to all routes except specified ones
}
