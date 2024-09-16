"use client"

import { postLike, removeLike } from "@/data/likeApi"
import { getUserShoeFullDetails } from "@/data/userShoeApi"
import { HandThumbDownIcon, HandThumbUpIcon } from "@heroicons/react/24/outline"
import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import {
  _apiBaseUrl,
  _likeUrl,
  _usershoeUrl,
  ThumbsDown,
  ThumbsUp,
} from "utility"

export default function LikesDiv({ userShoe, loggedInUserId }) {
  const [likes, setLikes] = useState()
  const [isLiked, setIsLiked] = useState()

  const render = () => {
    getUserShoeFullDetails(userShoe.id, loggedInUserId).then((res) => {
      setLikes(res.likes.length)
      setIsLiked(res.isLikedByCurrentUser)
    })
  }

  useEffect(() => {
    render()
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
            <button className="text-amber-600" onClick={handleDislike}>
              <div className="ml-[4px]">{ThumbsDown}</div>
              Dislike
            </button>
            <div className="ml-8 my-auto text-3xl text-amber-600">
              Likes: {likes}
            </div>
          </div>
        ) : (
          <div className="flex flex-row">
            <button className="text-amber-600" onClick={handleLike}>
              <div className="ml-[px4]">{ThumbsUp}</div>
              Like
            </button>
            <div className="ml-8 my-auto text-3xl text-amber-600">
              Likes: {likes}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
