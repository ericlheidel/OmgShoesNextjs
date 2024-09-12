import ShoesList from "../../components/shoes/shoes_list"
import { _apiBaseUrl } from "../../../utility"
import { cookies } from "next/headers"

export const metadata = {
  title: "Shoes",
  description: "Nike SB Dunk Sneaker Community",
}

export default async function Shoes() {
  async function getShoes() {
    const COOKIE = cookies().toString()

    let response = await fetch(
      `${_apiBaseUrl}/api/shoe/search?searchTerm=&filterYear=`,
      {
        cache: "no-cache",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Cookie: COOKIE,
        },
      }
    )

    if (response.status === 200) {
      let data = await response.json()
      return data
    } else {
    }
  }

  let shoes = await getShoes()

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 p-2 w-40 rounded-xl text-center text-4xl font-semibold md:text-2xl text-amber-600 bg-blue-950">
        Shoes
      </div>
      <ShoesList shoes={shoes} />
    </div>
  )
}

//mm ⬇--my attempt at using /api/shoe/route.ts--⬇
// export default async function Shoes({ searchTerm = "", filterYear = "" }) {
// try {
//   debugger
//   const response = await fetch(
//     // `https://localhost:3000/api/shoe/search?searchTerm=${searchTerm}&filterYear=${filterYear}`,
//     `https://localhost:3000/api/shoe/`,
//     {
//       cache: "no-cache",
//     }
//   )

//   if (!response.ok) {
//     throw new Error("Failed to fetch")
//   }

//   const shoes = await response.json()

//   return (
//     <div className="flex flex-col items-center">
//       <div className="mb-4 p-2 w-40 rounded-xl text-center text-4xl font-semibold md:text-2xl text-amber-600 bg-blue-950">
//         Shoes
//       </div>
//       <ShoesList shoes={shoes} />
//     </div>
//   )
// } catch (error) {
//   console.error("Page Component Error:", error)
//   return (
//     <div>
//       <h1>Error fetching data</h1>
//       <p>{error.message}</p>
//     </div>
//   )
// }
//mm ⬆--my attempt at using /api/shoe/route.ts--⬆
