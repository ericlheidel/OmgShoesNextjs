import { cookies } from "next/headers"
import { _apiBaseUrl, _usershoeUrl } from "../../../utility"
import Image from "next/image"
import Link from "next/link"

export default async function UserShoeCard({ id }) {
  const userShoeResponse = await fetch(`${_apiBaseUrl}${_usershoeUrl}/${id}`, {
    method: "GET",
    credentials: "include",
    cache: "no-cache",
    headers: {
      Cookie: `${cookies().toString()}`,
    },
  })

  const userShoe = await userShoeResponse.json()

  return (
    <div>
      <Link href={`/users/${userShoe.userProfileId}/userShoes/${userShoe.id}`}>
        <div className="md: w-fit font-semibold rounded-xl flex-col md:flex-row md:flex-wrap mb-4 p-4 bg-blue-950">
          <Image
            src={`${_apiBaseUrl}${userShoe?.shoe.image}`}
            alt={`image of ${userShoe?.shoe.name} shoe`}
            width={350}
            height={350}
            className="rounded-xl"
          />
          <div className="mt-2 text-xl text-amber-600">
            {userShoe?.shoe.name}
          </div>
          <div className="text-lg text-cyan-700">{userShoe?.shoeSize}</div>
          <div className="text-lg text-cyan-700">
            {userShoe?.condition.description}
          </div>
          <div className="text-lg text-cyan-700">{userShoe?.description}</div>
        </div>
      </Link>
    </div>
  )
}
