import { _apiBaseUrl, _conditionUrl } from "utility"
import Cookies from "js-cookie"

export const getAllConditions = async () => {
  return await fetch(`${_apiBaseUrl}${_conditionUrl}`, {
    method: "GET",
    credentials: "include",
    cache: "no-cache",
    headers: {
      Cookie: Cookies.get("OmgShoesLoginCookie"),
    },
  }).then((res) => res.json())
}
