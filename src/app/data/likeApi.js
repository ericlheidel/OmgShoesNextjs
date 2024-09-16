import { _apiBaseUrl, _likeUrl } from "utility"
import Cookies from "js-cookie"

export const postLike = async (like) => {
  return await fetch(`${_apiBaseUrl}${_likeUrl}`, {
    method: "POST",
    credentials: "include",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Cookie: Cookies.get("OmgShoesLoginCookie"),
    },
    body: JSON.stringify(like),
  })
}

export const removeLike = async (userShoeId, loggedInUserId) => {
  return await fetch(
    `${_apiBaseUrl}${_likeUrl}?userShoeId=${userShoeId}&userId=${loggedInUserId}`,
    {
      method: "DELETE",
      credentials: "include",
      cache: "no-cache",
      headers: {
        Cookie: Cookies.get("OmgShoesLoginCookie"),
      },
    }
  )
}
