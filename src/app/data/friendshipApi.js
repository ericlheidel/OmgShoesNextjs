import { _apiBaseUrl, _friendshipUrl } from "../../../utility"
import Cookies from "js-cookie"

export const getFriendsListByUserId = async (userId) => {
  return await fetch(`${_apiBaseUrl}${_friendshipUrl}/${userId}`, {
    method: "GET",
    credentials: "include",
    cache: "no-cache",
    headers: {
      Cookie: Cookies.get("OmgShoesLoginCookie"),
    },
  }).then((res) => res.json())
}

export const addFriendship = async (friendship) => {
  return await fetch(`${_apiBaseUrl}${_friendshipUrl}`, {
    method: "POST",
    credentials: "include",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Cookie: Cookies.get("OmgShoesLoginCookie"),
    },
    body: JSON.stringify(friendship),
  }).then((res) => res.json())
}

export const removeFriendship = async (idOne, idTwo) => {
  return await fetch(`${_apiBaseUrl}${_friendshipUrl}/${idOne}/${idTwo}`, {
    method: "DELETE",
    credentials: "include",
    cache: "no-cache",
    headers: {
      Cookie: Cookies.get("OmgShoesLoginCookie"),
    },
  })
}
