import { cookies } from "next/headers"
import { _apiBaseUrl, _shoeUrl } from "../../../../utility"
import ShoeDetailsCard from "../../../components/shoes/shoe_detail_card"

export async function generateMetadata({ params }) {
  const response = await fetch(`${_apiBaseUrl}${_shoeUrl}/${params.id}`, {
    method: "GET",
    credentials: "include",
    cache: "no-cache",
    headers: {
      Cookie: cookies().toString(),
    },
  })

  const shoe = await response.json()

  return {
    title: `${shoe.name}`,
    description: `Details about the ${shoe.name}`,
  }
}

export default function ShoeDetails({ params }) {
  return (
    <>
      <ShoeDetailsCard params={params} />
    </>
  )
}
