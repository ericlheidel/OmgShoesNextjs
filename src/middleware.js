import { NextResponse } from "next/server"
// import { cookies } from "next/headers"

export default async function middleware(req) {
  // Get cookies from the request
  // const cookieStore = cookies(req)
  // const authCookie = cookieStore.get("OmgShoesLoginCookie")

  // // Check if the authentication cookie exists
  // if (!authCookie) {
  //   // Redirect to login if no cookie is found
  //   console.log("No auth cookie found, redirecting to /login")
  //   return NextResponse.redirect(new URL("/login", req.url))
  // }

  // // Continue to the requested page if the cookie is present
  // console.log("Cookie found")
  // return NextResponse.next()

  const response = await fetch(`https://localhost:5212/api/auth/me`)

  if (response.status !== 200) {
    console.log(`response.status: ${response.status}`)
    console.log(`response.statusText: ${response.statusText}`)
    console.log("no logged in user found")
    return NextResponse.redirect(new URL("/login", req.url))
  } else {
    console.log(`response.status: ${response.status}`)
    console.log(`response.statusText: ${response.statusText}`)
    console.log("logged in user found")
    return NextResponse.next()
  }
}

// Middleware configuration
export const config = {
  matcher: ["/((?!login|api|_next).*)"], // Apply middleware to all routes except specified ones
}
