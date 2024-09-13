import { cookies } from "next/headers"
import {
  _apiBaseUrl,
  _conditionUrl,
  _shoeUrl,
  _sizeUrl,
  sizes,
} from "../../../utility"
import Image from "next/image"
import UserShoeForm from "../userShoe/userShoe-form"

export default async function ShoeDetailsCard({ params }) {
  // GET specific shoe
  const shoeResponse = await fetch(`${_apiBaseUrl}${_shoeUrl}/${params.id}`, {
    method: "GET",
    credentials: "include",
    cache: "no-cache",
    headers: {
      Cookie: `${cookies().toString()}`,
    },
  })

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
                {/* <form>
                  <fieldset>
                    <select
                      className="mt-2 rounded-md h-8 bg-cyan-700 text-blue-950 outline-none"
                      defaultValue={0}
                    >
                      <option value={0} key={0}>
                        Select a Condition
                      </option>
                      {conditions?.map((condition) => {
                        return (
                          <option value={condition.id} key={condition.id}>
                            {condition.description}
                          </option>
                        )
                      })}
                    </select>
                  </fieldset>
                  <fieldset>
                    <select
                      className="mt-4 rounded-md h-8 bg-cyan-700 text-blue-950 outline-none"
                      defaultValue={0}
                    >
                      <option>Select a Size</option>
                      {sizes.map((size) => {
                        return (
                          <option value={size.size} key={size.id}>
                            {size.size}
                          </option>
                        )
                      })}
                    </select>
                  </fieldset>
                  <fieldset>
                    <textarea
                      className="mt-4 rounded-md h-24 bg-cyan-700 outline-none p-[4px] text-blue-950"
                      defaultValue={""}
                    ></textarea>
                  </fieldset>
                  <fieldset>
                    <button className="mt-2 p-2 rounded-md bg-gray-500 text-black">
                      Add Shoe to Collection
                    </button>
                  </fieldset>
                </form> */}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}
