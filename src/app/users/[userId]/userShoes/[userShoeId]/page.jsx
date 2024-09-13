import { cookies } from "next/headers"
import LikesDiv from "src/components/likes/likes_div"
import ProfileBasic from "src/components/profile/profile_basic"
import UserShoeDetailsCard from "src/components/userShoe/userShoe_details_card"
import { _apiBaseUrl, _userprofileUrl, _usershoeUrl } from "utility"

export async function generateMetadata({ params }) {
  const response = await fetch(
    `${_apiBaseUrl}${_usershoeUrl}/${params.userShoeId}`,
    {
      method: "GET",
      credentials: "include",
      cache: "no-cache",
      headers: {
        Cookie: cookies().toString(),
      },
    }
  )

  const userShoe = await response.json()

  return {
    title: `${userShoe?.user?.name}'s ${userShoe?.shoe?.name}`,
    description: `Details about ${userShoe?.user?.name}'s ${userShoe?.shoe?.name}`,
  }
}

export default async function UserShoeDetails({ params }) {
  const loggedInUserResponse = await fetch(
    `${_apiBaseUrl}${_userprofileUrl}/me`,
    {
      method: "GET",
      credentials: "include",
      cache: "no-cache",
      headers: {
        Cookie: cookies().toString(),
      },
    }
  )

  const loggedInUser = await loggedInUserResponse.json()

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
      {/* likes_div.jsx explains an issue with "isLikedByCurrentUser" on userShoe objects */}
      {/* likes_div.jsx explains an issue with "isLikedByCurrentUser" on userShoe objects */}
      {/* likes_div.jsx explains an issue with "isLikedByCurrentUser" on userShoe objects */}
      {/* likes_div.jsx explains an issue with "isLikedByCurrentUser" on userShoe objects */}
      {/* likes_div.jsx explains an issue with "isLikedByCurrentUser" on userShoe objects */}
      {/* {loggedInUser.id !== userShoe.userProfileId ? (
        <LikesDiv userShoe={userShoe} />
      ) : ( */}
      <div className="p-4 rounded-xl text-3xl bg-blue-950 text-amber-600">
        Likes: {userShoe?.likes?.length}
      </div>
      {/* )} */}
    </>
  )
}
