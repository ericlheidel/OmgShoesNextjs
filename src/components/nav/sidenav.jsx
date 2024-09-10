"use client"

import Link from "next/link"
import { PowerIcon } from "@heroicons/react/24/outline"
import NavLinks from "./nav_links"
// import { logout } from "../../../auth"
// import { useAuth } from "../../../useAuth"
// import { useRouter } from "next/navigation"

export default function SideNav() {
  // const { setLoggedInUser } = useAuth()
  // const router = useRouter()

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-950  md:h-40"
        href="/"
      >
        <p className="md:text-[44px] text-[24px] font-bold ml-4 text-amber-600">
          OMG, <br />
          Shoes...
        </p>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-blue-950 md:block"></div>
        <form>
          <button
            className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-blue-950 p-3 text-amber-600 text-sm font-medium   md:flex-none md:justify-start md:p-2 md:px-3"
            // onClick={(e) => {
            //   e.preventDefault()
            //   logout().then(() => {
            //     setLoggedInUser(null)
            //     router.push("/logout")
            //   })
            // }}
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
