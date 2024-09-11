import { _apiBaseUrl, _shoeUrl } from "../../../../utility"
import { cookies } from "next/headers"

export async function GET(/* request */) {
  // const url = new URL(request.url)
  // const searchTerm = url.searchParams.get("searchTerm") || ""
  // const filterYear = url.searchParams.get("filterYear") || ""

  const cookieStore = cookies()
  const COOKIE = cookieStore.get("OmgShoesLoginCookie")

  try {
    const response = await fetch(
      // `${_apiBaseUrl}${_shoeUrl}/search?searchTerm=${searchTerm}&filterYear=${filterYear}`,
      `${_apiBaseUrl}${_shoeUrl}/1`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          // Cookie: `${cookies().toString()}`,
          Cookie: `${COOKIE}`,
        },
      }
    )

    console.log(`${response}`)
    console.log(`Cookie: ${cookies().toString()}`)
    console.log(`COOKIE: ${COOKIE}`)

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`)
    }

    const shoes = await response.json()

    return new Response(JSON.stringify(shoes), { status: 200 })
  } catch (error) {
    console.log("API Route Error:", error)
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    })
  }
}
