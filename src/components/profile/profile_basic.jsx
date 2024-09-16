import { cookies } from "next/headers"
import Image from "next/image"
import Link from "next/link"
import { _apiBaseUrl, _userprofileUrl } from "utility"

export default async function ProfileBasic({ userId }) {
  const userprofileResponse = await fetch(
    `${_apiBaseUrl}${_userprofileUrl}/${userId}`,
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

  return (
    <>
      {userprofile && (
        <>
          <div className="h-fit p-4 pb-2 bg-blue-950 rounded-xl md:w-fit">
            <Link href={`/users/${userId}`}>
              <Image
                src={`${_apiBaseUrl}${userprofile?.avatar}`}
                alt={`picture of ${userprofile?.name}`}
                width={500}
                height={500}
              />
            </Link>
            <div className="mt-2 text-2xl text-amber-600">
              {userprofile?.name}
            </div>
          </div>
        </>
      )}
    </>
  )
}
