"use client"

import { useEffect, useState } from "react"
import { _apiBaseUrl, _authUrl, _usershoeUrl } from "../../../utility"
import { tryGetLoggedInUser } from "@/data/authApi"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"

export default function UserShoeForm({ shoe, conditions, sizes }) {
  const [loggedInUser, setLoggedInUser] = useState([])
  const [chosenCondition, setChosenCondition] = useState("0")
  const [chosenSize, setChosenSize] = useState("0")
  const [userShoeDescription, setUserShoeDescription] = useState("")

  const [isDisabled, setIsDisabled] = useState(true)

  const router = useRouter()

  useEffect(() => {
    if (
      chosenCondition !== "0" &&
      chosenSize !== "0" &&
      userShoeDescription !== ""
    ) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [chosenCondition, chosenSize, userShoeDescription])

  useEffect(() => {
    tryGetLoggedInUser().then(setLoggedInUser)
  }, [])

  const handleAddShoeToCollection = async () => {
    const newShoe = {
      userProfileId: loggedInUser.id,
      shoeId: shoe.id,
      shoeSize: chosenSize,
      conditionId: parseInt(chosenCondition),
      description: userShoeDescription,
    }

    return fetch(`${_apiBaseUrl}${_usershoeUrl}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Cookie: Cookies.get("OmgShoesLoginCookie"),
      },
      body: JSON.stringify(newShoe),
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await handleAddShoeToCollection()
      router.push(`/users/${loggedInUser.id}`)
    } catch (error) {
      console.error("Error adding shoe to collection:", error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <select
            className="mt-2 rounded-md h-8 bg-cyan-700 text-blue-950 outline-none"
            value={chosenCondition}
            required
            onChange={(e) => setChosenCondition(e.target.value)}
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
            value={chosenSize}
            required
            onChange={(e) => setChosenSize(e.target.value)}
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
            value={userShoeDescription}
            required
            onChange={(e) => setUserShoeDescription(e.target.value)}
          ></textarea>
        </fieldset>
        <fieldset>
          <button
            className={`mt-2 p-2 rounded-md ${isDisabled ? "bg-gray-600 text-gray-400" : "bg-blue-500 text-blue-950"}`}
            disabled={isDisabled}
          >
            Add Shoe to Collection
          </button>
        </fieldset>
      </form>
    </>
  )
}
