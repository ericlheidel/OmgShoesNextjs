import { cookies } from "next/headers"
import { _apiBaseUrl, _userprofileUrl } from "../../../../utility"

export async function generateMetadata({ params }) {
  // const { id } = params

  const response = await fetch(
    `${_apiBaseUrl}${_userprofileUrl}/${params.id}`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        Cookie: cookies().toString(),
      },
    }
  )
  const userprofile = await response.json()

  return {
    title: `${userprofile.name}`,
    description: `Details about the ${userprofile.name}`,
  }
}

export default function UserDetails({ params }) {
  return <div>{`Details for User #${params.id}`}</div>
}
