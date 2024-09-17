"use client"

import Image from "next/image"
import { formatDateDetailed } from "../../../utility"
import { useState } from "react"
import Link from "next/link"
import { editComment } from "@/data/commentApi"

export default function Comment({ comment, loggedInUser }) {
  const [isHidden, setIsHidden] = useState(true)
  const [editedComment, setEditedComment] = useState(comment.text)

  const handleSave = async (e) => {
    if (editedComment === "") {
      e.preventDefault()
      window.alert("Please enter a comment")
    } else {
      const newText = editedComment

      const updatedComment = {
        id: comment.id,
        userProfileId: comment.userProfileId,
        userShoeId: comment.userShoeId,
        text: editedComment,
      }

      editComment(updatedComment).then(setIsHidden(true))
    }
  }

  const handleDelete = () => {}

  return (
    //+ COMMENT DIV
    <div className="border-4 border-cyan-700 rounded-xl p-2 mb-4">
      {/*//+ "edited:" IF EDITED  */}
      <div className="text-lg italic text-amber-600">
        {comment.isEdited && <p>edited:</p>}
      </div>
      {/*//+ ⬇ COMMENT TIMESTAMP ⬇ */}
      <div>
        <p className="text-md mb-2 text-lg text-amber-600">
          {formatDateDetailed(comment.timeStamp)}
        </p>
      </div>
      {/*//+ ⬇ COMMENT TEXT DIV ⬇ */}
      <div
        className="bg-cyan-700 rounded-xl p-2 mt-2 mb-2 text-blue-950"
        hidden={!isHidden}
      >
        <p className="text-xl font-semibold">{comment.text}</p>
      </div>
      {/*//+ ⬇ COMMENT TEXTAREA FOR EDITING (INITIALLY HIDDEN) ⬇ */}
      <div
        className="mb-2 p-2 h-[125px] rounded-xl bg-cyan-700"
        hidden={isHidden}
      >
        <textarea
          className="w-full rounded-xl bg-cyan-700 outline-none"
          value={editedComment}
          onChange={(e) => {
            setEditedComment(e.target.value)
          }}
        ></textarea>
      </div>
      {/*//+ ⬇ COMMENTER'S AVATAR AND NAME ⬇ */}
      <div className="flex flex:row rounded-xl p-[2px] bg-cyan-700">
        <Link href={`/users/${comment.userProfileId}`}>
          <Image
            src={`https://omgshoes.eheidel.com/${comment.user.avatar}`}
            alt={`image of ${comment.user.name}'s avatar`}
            width={50}
            height={50}
            className="rounded-full ml-2"
          />
        </Link>
        <p className="text-2xl my-auto ml-4 text-blue-950">
          {comment.user.name}
        </p>
      </div>
      {/*//+ ⬇ EDIT BUTTON FOR LOGGED IN USER ⬇ */}
      {comment.userProfileId === loggedInUser.id && (
        <div className="flex justify-center">
          <button
            className="mt-2 px-auto py-2 w-[75px] rounded-xl bg-blue-500 text-blue-950"
            hidden={!isHidden}
            onClick={() => {
              setIsHidden(false)
            }}
          >
            Edit
          </button>
        </div>
      )}
      {/*//+ ⬇ BUTTON DIV, INCLUDES SAVE, CANCEL & DELETE (INITIALLY HIDDEN) ⬇ */}
      <div>
        <div hidden={isHidden}>
          <div className="mt-2 flex flex-row justify-evenly">
            <form className="flex justify-center">
              <fieldset>
                <button
                  className="px-auto py-2 w-[75px] rounded-xl bg-blue-500 text-blue-950"
                  onClick={handleSave}
                >
                  Save
                </button>
              </fieldset>
            </form>
            <button
              className="px-auto py-2 w-[75px] rounded-xl bg-blue-500 text-blue-950"
              // hidden={isHidden}
              onClick={() => {
                setIsHidden(true)
              }}
            >
              Cancel
            </button>
            <button className=" px-auto py-2 w-[75px] rounded-xl bg-blue-500 text-blue-950">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
