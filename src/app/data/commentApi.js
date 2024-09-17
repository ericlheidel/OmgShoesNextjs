import { _apiBaseUrl, _commentUrl } from "utility"
import Cookies from "js-cookie"

export const editComment = async (comment) => {
  return await fetch(`${_apiBaseUrl}${_commentUrl}/${comment.id}`, {
    method: "PUT",
    credentials: "include",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Cookie: Cookies.get("OmgShoesLoginCookie"),
    },
    body: JSON.stringify(comment),
  })
}

export const deleteComment = async (commentId) => {
  return await fetch(`${_apiBaseUrl}${_commentUrl}/${commentId}`, {
    method: "DELETE",
    credentials: "include",
    cache: "no-cache",
    headers: {
      Cookie: Cookies.get("OmgShoesLoginCookie"),
    },
  })
}
