import { _apiBaseUrl, _usershoeUrl } from "utility"
import Cookies from "js-cookie"

export const getUserShoeById = async (userShoeId, loggedInUserId) => {
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

export const addShoeToUserCollection = async (userShoe) => {
  return await fetch(`${_apiBaseUrl}${_usershoeUrl}`, {
    method: "POST",
    credentials: "include",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Cookie: Cookies.get("OmgShoesLoginCookie"),
    },
    body: JSON.stringify(userShoe),
  })
}

export const deleteUserShoeFromCollection = async (id) => {
  return await fetch(`${_apiBaseUrl}${_usershoeUrl}/${id}`, {
    method: "DELETE",
    credentials: "include",
    cache: "no-cache",
    headers: {
      Cookie: Cookies.get("OmgShoesLoginCookie"),
    },
  })
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
