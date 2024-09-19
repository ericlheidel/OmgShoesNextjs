import { _apiBaseUrl, _userprofileUrl } from "utility"

export const getAllUsersWithBasicInfo = async () => {
  return await fetch(`${_apiBaseUrl}${_userprofileUrl}/basic`, {
    method: "GET",
    credentials: "include",
    cache: "no-cache",
    headers: {
      Cookie: Cookies.get("OmgShoesLoginCookie"),
    },
  }).then((res) => res.json())
}

export const getAllUsersWithRoles = async () => {
  return await fetch(`${_apiBaseUrl}${_userprofileUrl}/withroles`, {
    method: "GET",
    credentials: "include",
    cache: "no-cache",
    headers: {
      Cookie: Cookies.get("OmgShoesLoginCookie"),
    },
  }).then((res) => res.json())
}

export const getUserById = async (id) => {
  return await fetch(`${_apiBaseUrl}${_userprofileUrl}/${id}`, {
    method: "GET",
    credentials: "include",
    cache: "no-cache",
    headers: {
      Cookie: Cookies.get("OmgShoesLoginCookie"),
    },
  }).then((res) => res.json())
}

export const promoteUser = async (userId) => {
  return await fetch(`${_apiBaseUrl}${_userprofileUrl}/promote/${userId}`, {
    method: "POST",
    credentials: "include",
    cache: "no-cache",
    headers: {
      // "Content-Type": "application/json",
      Cookie: Cookies.get("OmgShoesLoginCookie"),
    },
  })
}
export const demoteUser = async (userId) => {
  return await fetch(`${_apiBaseUrl}${_userprofileUrl}/demote/${userId}`, {
    method: "POST",
    credentials: "include",
    cache: "no-cache",
    headers: {
      // "Content-Type": "application/json",
      Cookie: Cookies.get("OmgShoesLoginCookie"),
    },
  })
}

export const updateUserProfile = async (profile, userId) => {
  return await fetch(`${_apiBaseUrl}${_userprofileUrl}/${userId}`, {
    method: "PUT",
    credentials: "include",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Cookie: Cookies.get("OmgShoesLoginCookie"),
    },
    body: JSON.stringify(profile),
  })
}
