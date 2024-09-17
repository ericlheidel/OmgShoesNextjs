"use client"

import { useEffect, useState } from "react"
import UserShoeEditForm from "./userShoe_edit_form"

export default function UserShoeDetailsDiv({ userShoe, loggedInUser }) {
  const [isHidden, setIsHidden] = useState(true)

  return (
    <>
      <div className="mt-4 p-4 rounded-xl bg-blue-950">
        <div className="text-2xl text-amber-600">
          <b>Condition:</b>
          <br></br>
          {userShoe?.condition?.description}
        </div>
        <div className="mt-4 text-2xl text-amber-600">
          <b>Description:</b>
          <br></br> {`"${userShoe.description}"`}
        </div>
        {loggedInUser.id === userShoe.userProfileId && (
          <>
            {isHidden && (
              <button
                className="mt-4 p-2 rounded-xl text-lg bg-blue-500 text-blue-950"
                onClick={() => {
                  setIsHidden(false)
                }}
              >
                Edit Shoe
              </button>
            )}
            {!isHidden && (
              <button
                className="mt-4 p-2 rounded-xl text-lg bg-blue-500 text-blue-950"
                onClick={() => {
                  setIsHidden(true)
                }}
              >
                Cancel
              </button>
            )}
          </>
        )}
        <div
          className="mt-4 rounded-xl text-amber-600 bg-blue-950"
          hidden={isHidden}
        >
          <UserShoeEditForm userShoe={userShoe} loggedInUser={loggedInUser} />
        </div>
      </div>
    </>
  )
}
