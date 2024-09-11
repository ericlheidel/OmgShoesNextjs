import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export default async function middleware(req) {
  const response = await fetch(`https://localhost:5212/api/auth/me`, {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie: `${cookies().toString()}`,
    },
  })

  if (response.status !== 200) {
    // console.log(`bad response.status: ${response.status}`)
    return NextResponse.redirect(new URL("/login", req.url))
  } else {
    // console.log(`good response.status: ${response.status}`)
    return NextResponse.next()
  }
}

// Middleware configuration
export const config = {
  matcher: ["/((?!login|api|_next).*)"], // Apply middleware to all routes except specified ones
}
