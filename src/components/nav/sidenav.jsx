"use client"

import Link from "next/link"
import { PowerIcon } from "@heroicons/react/24/outline"
import NavLinks from "./nav_links"
import { logout, tryGetLoggedInUser } from "../../app/data/authApi"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function SideNav() {
  const [loggedInUser, setLoggedInUser] = useState([])
  const router = useRouter()

  useEffect(() => {
    tryGetLoggedInUser().then(setLoggedInUser)
  }, [])

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-950  md:h-40"
        href="/"
      >
        {loggedInUser && (
          <Link href={`https://localhost:3000/users/${loggedInUser.id}`}>
            <div>
              {/* <Link href={`localhost:3000/users/${loggedInUser.id}`}> */}
              <Image
                src={`https://omgshoes.eheidel.com/${loggedInUser.avatar}`}
                alt={`picture of ${loggedInUser.name}'s avatar`}
                className="border-cyan-700 border-2 ml-[4px] mb-[4px] rounded-full"
                width={60}
                height={60}
                loading="eager"
              />
              {/* </Link> */}
            </div>
          </Link>
        )}
        <p className="md:text-[44px] text-[24px] font-bold ml-4 text-amber-600">
          OMG, <br />
          Shoes...
        </p>
      </div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <form>
          <button
            className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-blue-950 p-3 text-amber-600 text-sm font-medium   md:flex-none md:justify-start md:p-2 md:px-3"
            onClick={(e) => {
              e.preventDefault()
              logout().then(() => {
                router.push("/logout")
                // window.location.href = "/logout"
              })
            }}
          >
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
        <div className="hidden h-auto w-full grow rounded-md bg-transparent md:block"></div>
      </div>
    </div>
  )
}
