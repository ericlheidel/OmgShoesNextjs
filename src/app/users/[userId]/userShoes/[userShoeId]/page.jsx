import { cookies } from "next/headers"
import LikesDiv from "src/components/likes/likes_div"
import ProfileBasic from "src/components/profile/profile_basic"
import UserShoeDetailsCard from "src/components/userShoe/userShoe_details_card"
import UserShoeDetailsDiv from "src/components/userShoe/userShoe_details_div"
import { _apiBaseUrl, _authUrl, _usershoeUrl } from "utility"

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
  const loggedInUserResponse = await fetch(`${_apiBaseUrl}${_authUrl}/me`, {
    method: "GET",
    credentials: "include",
    cache: "no-cache",
    headers: {
      Cookie: cookies().toString(),
    },
  })

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

  const isShoeLikedByCurrentUserResponse = await fetch(
    `${_apiBaseUrl}${_usershoeUrl}/${params.userShoeId}?userId=${loggedInUser.id}`,
    {
      method: "GET",
      credentials: "include",
      cache: "no-cache",
      headers: {
        Cookie: cookies().toString(),
      },
    }
  )

  const isShoeLikedByCurrentUser = await isShoeLikedByCurrentUserResponse.json()

  return (
    <div className="md:flex md:flex-row">
      <ProfileBasic userId={params.userId} />
      <div className="md:ml-4">
        <UserShoeDetailsCard userShoeId={params.userShoeId} />
        {loggedInUser.id !== userShoe.userProfileId ? (
          <LikesDiv
            userShoe={userShoe}
            loggedInUserId={loggedInUser.id}
            likes={userShoe?.likes?.length}
            isLiked={isShoeLikedByCurrentUser.isLikedByCurrentUser}
          />
        ) : (
          <div className="p-4 rounded-xl text-2xl bg-blue-950 text-amber-600">
            Likes: {userShoe?.likes?.length}
          </div>
        )}
        <div>
          <UserShoeDetailsDiv userShoe={userShoe} loggedInUser={loggedInUser} />
        </div>
      </div>
    </div>
  )
}
