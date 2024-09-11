// import { cookies } from "next/headers"
import { _apiBaseUrl, _authUrl } from "../../../utility"
import Cookies from "js-cookie"

export async function tryGetLoggedInUser() {
  const COOKIE = Cookies.get("OmgShoesLoginCookie")

  return await fetch(`${_apiBaseUrl}${_authUrl}/me`, {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie: `OmgShoesLoginCookie=${COOKIE}`,
    },
  }).then((res) => {
    return res.status === 401 ? Promise.resolve(null) : res.json()
  })
}

export async function handleLogin(email, password) {
  try {
    const response = await fetch(`${_apiBaseUrl}${_authUrl}/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        Authorization: `Basic ${btoa(`${email}:${password}`)}`,
        "Content-Type": "application/json",
      },
    })

    if (response.ok) {
      console.log("Login successful")
      return tryGetLoggedInUser()
    } else {
      console.error(`Login failed with status: ${response.status}`)
      return null
    }
  } catch (error) {
    console.error("An error occurred during login:", error)
    return null
  }
}

export async function logout() {
  const COOKIE = Cookies.get("OmgShoesLoginCookie")

  return await fetch(`${_apiBaseUrl}${_authUrl}/logout`, {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie: `OmgShoesLoginCookie=${COOKIE}`,
    },
  })
}
