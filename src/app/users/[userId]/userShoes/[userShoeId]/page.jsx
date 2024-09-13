import { cookies } from "next/headers"
import ProfileBasic from "src/components/profile/profile_basic"
import UserShoeDetailsCard from "src/components/userShoe/userShoe_details_card"
import { _apiBaseUrl, _usershoeUrl } from "utility"

export default async function UserShoeDetails({ params }) {
  const userShoeResponse = await fetch(
    `${_apiBaseUrl}${_usershoeUrl}/${params.userShoeId}`,
    {
      method: "GET",
      credentials: "include",
      cache: "no-cache",
      headers: {
        Cookie: `${cookies().toString()}`,
      },
    }
  )

  const userShoe = await userShoeResponse.json()

  return (
    <>
      <ProfileBasic userId={params.userId} />
      <UserShoeDetailsCard userShoeId={params.userShoeId} />
    </>
  )
}
