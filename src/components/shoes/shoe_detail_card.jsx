import { cookies } from "next/headers"
import {
  _apiBaseUrl,
  _conditionUrl,
  _shoeUrl,
  _sizeUrl,
  sizes,
} from "../../../utility"
import Image from "next/image"
import UserShoeForm from "../userShoe/userShoe_form"

export default async function ShoeDetailsCard({ params }) {
  console.log(typeof params.shoeId)
  // GET specific shoe
  const shoeResponse = await fetch(
    `${_apiBaseUrl}${_shoeUrl}/${params.shoeId}`,
    {
      method: "GET",
      credentials: "include",
      cache: "no-cache",
      headers: {
        Cookie: `${cookies().toString()}`,
      },
    }
  )

  const shoe = await shoeResponse.json()

  // GET all conditions
  const conditionsResponse = await fetch(`${_apiBaseUrl}${_conditionUrl}`, {
    method: "GET",
    credentials: "include",
    cache: "no-cache",
    headers: {
      Cookie: `${cookies().toString()}`,
    },
  })

  const conditions = await conditionsResponse.json()

  return (
    <>
      <div>
        {shoe && (
          <>
            <div className="p-4 bg-blue-950 rounded-xl md:w-2/3">
              <Image
                src={`${_apiBaseUrl}${shoe?.image}`}
                alt={`picture of ${shoe?.name} shoe`}
                className="rounded-xl"
                width={500}
                height={500}
                unoptimized
              />
              <div className="mt-2 text-amber-600 text-xl">
                <div className="font-bold text-2xl">{shoe.name}</div>
                <div className="mt-1">Style: {shoe.style}</div>
                <div className="mt-1">{shoe.year}</div>
                <div className="mt-1">{shoe.modelNumber}</div>
                <div className="mt-1">{shoe.colorway}</div>
              </div>
              <div>
                <UserShoeForm
                  shoe={shoe}
                  conditions={conditions}
                  sizes={sizes}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}
