export const metadata = {
  title: "Practice Test",
  description: "Nike SB Dunk Sneaker Community",
}

export default async function ShoesPage() {
  try {
    const res = await fetch("https://localhost:3000/api/practice", {
      cache: "no-cache",
    })

    if (!res.ok) {
      throw new Error("Failed to fetch")
    }

    const shoe = await res.json()

    return (
      <div>
        <h1>Shoe Details</h1>
        <p>Name: {shoe.name}</p>
      </div>
    )
  } catch (error) {
    console.error("Page Component Error:", error)
    return (
      <div>
        <h1>Error fetching data</h1>
        <p>{error.message}</p>
      </div>
    )
  }
}
