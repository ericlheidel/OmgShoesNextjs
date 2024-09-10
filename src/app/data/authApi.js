import { cookies } from "next/headers"
import { _apiBaseUrl, _authUrl } from "../../../utility"

const COOKIE = cookies().toString()

export async function tryGetLoggedInUser() {
  return await fetch(`${_apiBaseUrl}${_authUrl}/me`, {
    headers: {
      Cookie: COOKIE,
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
