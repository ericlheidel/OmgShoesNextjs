import { _apiBaseUrl, _shoeUrl } from "utility"
import Cookies from "js-cookie"

export const getShoeById = async (id) => {
  return await fetch(`${_apiBaseUrl}${_shoeUrl}/${id}`, {
    method: "GET",
    credentials: "include",
    cache: "no-cache",
    headers: {
      Cookie: Cookies.get("OmgShoesLoginCookie"),
    },
  }).then((res) => res.json())
}

export const createShoe = async (shoe) => {
  return await fetch(`${_apiBaseUrl}${_shoeUrl}`, {
    method: "POST",
    credentials: "include",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Cookie: Cookies.get("OmgShoesLoginCookie"),
    },
    body: JSON.stringify(shoe),
  }).then((res) => res.json())
}

export const getShoesBySearch = async (searchTerm, filterYear) => {
  return await fetch(
    `${_apiBaseUrl}${_shoeUrl}/search?searchTerm=${searchTerm}&filterYer=${filterYear}`,
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

export const deleteShoe = async (shoeId) => {
  return await fetch(`${_apiBaseUrl}${_shoeUrl}/${shoeId}`, {
    method: "DELETE",
    credentials: "include",
    cache: "no-cache",
    headers: {
      Cookie: Cookies.get("OmgShoesLoginCookie"),
    },
  })
}
