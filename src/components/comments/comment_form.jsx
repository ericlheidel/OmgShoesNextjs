"use client"

import { postComment } from "@/data/commentApi"
import { useState } from "react"

export default function CommentForm({ loggedInUser, userShoeId }) {
  const [commentText, setCommentText] = useState("")

  const handleSubmit = (e) => {
    if (commentText === "") {
      e.preventDefault()
      window.alert("Please enter a comment")
    } else {
      const newComment = {
        userProfileId: loggedInUser.id,
        userShoeId: userShoeId,
        text: commentText,
      }

      postComment(newComment)
    }
  }

  return (
    <div>
      <div className="mb-2 text-2xl font-bold text-amber-600">
        Leave a comment
      </div>
      <form>
        <fieldset>
          <textarea
            className="w-full h-[175px] md:h[175px] p-2 text-xl rounded-xl text-blue-950 bg-cyan-700 outline-none resize-none"
            value={commentText}
            onChange={(e) => {
              setCommentText(e.target.value)
            }}
          ></textarea>
        </fieldset>
        <fieldset className="flex justify-center">
          <button
            className="mt-2 px-auto py-2 w-[75px] rounded-xl bg-blue-500 text-blue-950"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  )
}
