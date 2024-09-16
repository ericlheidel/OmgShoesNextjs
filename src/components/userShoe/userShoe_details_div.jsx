"use client"

import { useState } from "react"

export default function UserShoeDetailsDiv({ userShoe, loggedInUser }) {
  const [isHidden, setIsHidden] = useState(true)

  return (
    <>
      <div className="mt-4 p-4 rounded-xl bg-blue-950">
        <div className="text-2xl text-amber-600">
          Condition: {userShoe?.condition?.description}
        </div>
        <div className="mt-4 text-2xl text-amber-600">
          Description: {userShoe.description}
        </div>
        {loggedInUser.id === userShoe.userProfileId && (
          <>
            <button
              className="mt-4 p-2 rounded-xl text-lg bg-blue-500 text-blue-950"
              onClick={() => {
                setIsHidden(false)
              }}
            >
              Edit Shoe
            </button>
            <button
              className="ml-4 mt-4 p-2 rounded-xl text-lg bg-blue-500 text-blue-950"
              onClick={() => {
                setIsHidden(true)
              }}
            >
              --hide--
            </button>
          </>
        )}
        <div
          className="mt-4 p-4 rounded-xl text-amber-600 bg-blue-950"
          hidden={isHidden}
        >
          TEST
        </div>
      </div>
    </>
  )
}
