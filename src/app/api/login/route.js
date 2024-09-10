export async function POST(email, password) {
  try {
    const response = await fetch(`${_apiBaseUrl}${_apiUrl}/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        // Authorization: `Basic ${btoa(`${email}:${password}`)}`,
        Authorization: `Basic ${btoa(`${"the@waitress"}:${"password"}`)}`,
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
