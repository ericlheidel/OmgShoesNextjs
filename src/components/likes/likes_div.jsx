"use client"

import { postLike, removeLike } from "@/data/likeApi"
import { getUserShoeById } from "@/data/userShoeApi"
import { useEffect, useState } from "react"
import { _apiBaseUrl, _likeUrl, _usershoeUrl } from "utility"

export default function LikesDiv({ userShoe, loggedInUserId }) {
  const [likes, setLikes] = useState()
  const [isLiked, setIsLiked] = useState()

  const render = () => {
    getUserShoeById(userShoe.id, loggedInUserId).then((res) => {
      setLikes(res.likes.length)
      setIsLiked(res.isLikedByCurrentUser)
    })
  }

  useEffect(() => {
    render()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLike = () => {
    const newLike = {
      userProfileId: loggedInUserId,
      userShoeId: userShoe.id,
    }

    postLike(newLike).then(() => {
      render()
    })
  }

  const handleDislike = () => {
    removeLike(userShoe.id, loggedInUserId).then(() => {
      render()
    })
  }

  return (
    <>
      <div className="p-4 bg-blue-950 rounded-xl">
        {isLiked ? (
          <div className="flex flex-row">
            <button
              className="w-[80px] p-2 rounded-xl bg-amber-600 text-blue-950 font-semibold"
              onClick={handleDislike}
            >
              {/* <div className="ml-[4px]">{ThumbsDown}</div> */}
              Unlike
            </button>
            <div className="ml-8 my-auto text-3xl text-amber-600">
              <b>Likes:</b> {likes}
            </div>
          </div>
        ) : (
          <div className="flex flex-row">
            <button
              className="w-[80px] p-2 rounded-xl bg-amber-600 text-blue-950 font-semibold"
              onClick={handleLike}
            >
              {/* <div className="ml-[px4]">{ThumbsUp}</div> */}
              Like
            </button>
            <div className="ml-8 my-auto text-3xl text-amber-600">
              <b>Likes:</b> {likes}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
