import { _apiBaseUrl, _usershoeUrl } from "utility"
import Cookies from "js-cookie"

export const getUserShoeFullDetails = async (userShoeId, loggedInUserId) => {
  return await fetch(
    `${_apiBaseUrl}${_usershoeUrl}/${userShoeId}?userId=${loggedInUserId}`,
    {
      method: "GET",
      credentials: "include",
      cache: "no-cache",
      headers: {
        Cookie: Cookies.get("OmgShoesLoginCookie"),
      },
    }
  ).then((res) => res.json())
}

export const editUserShoe = async (userShoe, userShoeId) => {
  return await fetch(`${_apiBaseUrl}${_usershoeUrl}/${userShoeId}`, {
    method: "PUT",
    credentials: "include",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Cookie: Cookies.get("OmgShoesLoginCookie"),
    },
    body: JSON.stringify(userShoe),
  })
}
