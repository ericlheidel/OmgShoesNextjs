import { _apiBaseUrl, _authUrl } from "../../../utility"

export async function tryGetLoggedInUser() {
  return await fetch(`${_apiBaseUrl}${_authUrl}/me`).then((res) => {
    return res.status === 401 ? Promise.resolve(null) : res.json()
  })
}
