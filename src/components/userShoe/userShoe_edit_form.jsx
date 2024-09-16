"use client"

import { getAllConditions } from "@/data/conditinsApi"
import { editUserShoe } from "@/data/userShoeApi"
import { useEffect, useState } from "react"

export default function UserShoeEditForm({ userShoe, loggedInUser }) {
  const [conditions, setConditions] = useState([])
  const [editedCondition, setEditedCondition] = useState(userShoe.conditionId)
  const [editedDescription, setEditedDescription] = useState(
    userShoe.description
  )

  useEffect(() => {
    getAllConditions().then(setConditions)
  }, [])

  useEffect(() => {
    setEditedCondition(userShoe?.conditionId)
  }, [])

  const handleSave = (e) => {
    if (editedDescription === "") {
      e.preventDefault()
      window.alert("Please enter a description")
    } else {
      const editedUserShoe = {
        userProfileId: loggedInUser.id,
        shoeId: userShoe.shoeId,
        shoeSize: userShoe.shoeSize,
        conditionId: editedCondition,
        description: editedDescription,
      }

      editUserShoe(editedUserShoe, userShoe.id)
    }
  }

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSave}>
        <div className="p-4 border-4 border-cyan-700 rounded-xl">
          <fieldset>
            <button className="mb-4 p-2 rounded-xl text-lg bg-blue-500 text-blue-950">
              Delete Shoe
            </button>
          </fieldset>
          <fieldset>
            <label>
              <p className="font-semibold text-xl">Edit Condition:</p>
              <select
                className="w-2/3 rounded-md h-8 bg-cyan-700 text-blue-950 outline-none"
                value={editedCondition}
                required
                onChange={(e) => setEditedCondition(parseInt(e.target.value))}
              >
                {conditions?.map((condition) => {
                  return (
                    <option value={condition.id} key={condition.id}>
                      {condition.description}
                    </option>
                  )
                })}
              </select>
            </label>
          </fieldset>
          <fieldset>
            <label>
              <p className="mt-4 font-semibold text-xl">Edit Description:</p>
              <textarea
                className="rounded-md h-24 bg-cyan-700 outline-none p-[4px] text-blue-950"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
              ></textarea>
            </label>
          </fieldset>
          <fieldset>
            <button
              className="mt-2 p-2 rounded-xl text-lg bg-blue-500 text-blue-950"
              type="submit"
              // onClick={handleSave}
            >
              Save Shoe
            </button>
          </fieldset>
        </div>
      </form>
    </div>
  )
}
