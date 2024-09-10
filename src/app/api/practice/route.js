export async function GET() {
  try {
    const response = await fetch("https://localhost:5212/api/test/shoe", {
      method: "GET",
    })

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`)
    }

    const shoe = await response.json()

    return new Response(JSON.stringify(shoe), { status: 200 })
  } catch (error) {
    console.error("API Route Error:", error)
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    })
  }
}
