import { _apiBaseUrl } from "../../../utility"
import { cookies } from "next/headers"
import UsersList from "../../components/users/users_list"

export const metadata = {
  title: "Users",
  description: "Nike SB Dunk Sneaker Community",
}

export default async function Users() {
  async function getUsersBasic() {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

    const COOKIE = cookies().toString()

    let response = await fetch(`${_apiBaseUrl}/api/userprofile/basic`, {
      cache: "no-store",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Cookie: COOKIE,
      },
    })

    // console.log("Request Headers:", response.headers)

    if (response.status === 200) {
      let data = await response.json()
      // console.log(`response.status: ${response.status}`)
      // console.log(`response.statusText: ${response.statusText}`)
      return data
    } else {
      // console.log(`bad response.status: ${response.status}`)
      // console.log(`bad response.statusText: ${response.statusText}`)
    }
  }

  let users = await getUsersBasic()
  // console.log(`users: ${JSON.stringify(users)}`)

  return (
    <div className="flex flex-col md:flex-row md:justify-evenly items-center">
      <div>
        <UsersList users={users} />
      </div>
    </div>
  )
}
