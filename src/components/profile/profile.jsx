import { cookies } from "next/headers"
import { _apiBaseUrl, _userprofileUrl, _usershoeUrl } from "../../../utility"
import Image from "next/image"
import UserShoeCard from "../userShoe/userShoe_card"

export default async function UserProfile({ params }) {
  const userprofileResponse = await fetch(
    `${_apiBaseUrl}${_userprofileUrl}/${params.userId}`,
    {
      method: "GET",
      credentials: "include",
      cache: "no-cache",
      headers: {
        Cookie: `${cookies().toString()}`,
      },
    }
  )

  const userprofile = await userprofileResponse.json()

  const userShoeCollectionResponse = await fetch(
    `${_apiBaseUrl}${_usershoeUrl}/collection/${params.userId}`,
    {
      method: "GET",
      credentials: "include",
      cache: "no-cache",
      headers: {
        Cookie: `${cookies().toString()}`,
      },
    }
  )

  const userShoeCollection = await userShoeCollectionResponse.json()

  return (
    <>
      <div className="flex flex-col md:flex-row">
        {userprofile && (
          <>
            <div className="h-full p-4 bg-blue-950 rounded-xl md:w-fit">
              <Image
                src={`${_apiBaseUrl}${userprofile?.avatar}`}
                alt={`picture of ${userprofile?.name}`}
                width={500}
                height={500}
              />
              <div className="my-2 text-2xl text-amber-600">
                {userprofile?.name}
              </div>
              <div>
                <div className="p-2 rounded-xl text-lg text-blue-950 bg-cyan-700">
                  {userprofile?.bio}
                </div>
                <div className="mt-4 p-2 rounded-xl text-lg text-blue-950 bg-cyan-700">
                  {userprofile?.city}, {userprofile?.state}
                </div>
                <div className="mt-4 p-2 rounded-xl text-lg text-blue-950 bg-cyan-700">
                  Shoes in Collection: {userShoeCollection.length}
                </div>
              </div>
            </div>
            <div className="mt-4 md:ml-4 md:mt-0">
              {userShoeCollection && (
                <>
                  <div>
                    {userShoeCollection?.map((userShoe) => (
                      <UserShoeCard key={userShoe.id} id={userShoe.id} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </>
  )
}
