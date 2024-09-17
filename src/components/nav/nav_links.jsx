"use client"

import {
  HomeIcon,
  Squares2X2Icon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline"
import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  // {
  //   name: "Invoices",
  //   href: "/invoices",
  //   icon: DocumentDuplicateIcon,
  // },
  // { name: "Customers", href: "/customers", icon: UserGroupIcon },
  {
    name: "Shoes",
    href: "/shoes",
    icon: Squares2X2Icon,
  },
  {
    name: "Users",
    href: "/users",
    icon: UserCircleIcon,
  },
]

export default function NavLinks({ loggedInUser }) {
  const pathname = usePathname()

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-blue-950 text-amber-600 p-3 text-sm font-medium  md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-pink-950 text-amber-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        )
      })}
      <Link
        key={loggedInUser.id}
        href={`/users/${loggedInUser.id}`}
        className={clsx(
          "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-blue-950 text-amber-600 p-3 text-sm font-medium  md:flex-none md:justify-start md:p-2 md:px-3",
          {
            "bg-pink-950 text-amber-600":
              pathname === `/users/${loggedInUser.id}`,
          }
        )}
      >
        <UserIcon className="w-6" />
        <p className="hidden md:block">Profile</p>
      </Link>
    </>
  )
}
