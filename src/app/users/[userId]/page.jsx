import { cookies } from "next/headers"
import { _apiBaseUrl, _userprofileUrl } from "../../../../utility"
import UserProfile from "../../../components/profile/profile"

export async function generateMetadata({ params }) {
  const response = await fetch(
    `${_apiBaseUrl}${_userprofileUrl}/${params.id}`,
    {
      method: "GET",
      credentials: "include",
      cache: "no-cache",
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
  return (
    <>
      <UserProfile params={params} />
    </>
  )
}
