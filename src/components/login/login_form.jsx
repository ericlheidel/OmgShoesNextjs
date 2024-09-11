"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { AtSymbolIcon, KeyIcon } from "@heroicons/react/16/solid"
import { handleLogin } from "../../app/data/authApi.js"

export default function LoginPage() {
  const [email, setEmail] = useState("the@waitress.com")
  const [password, setPassword] = useState("password")
  const router = useRouter()

  const onSubmit = async (e) => {
    e.preventDefault()

    const response = await handleLogin(email, password)
    const user = JSON.stringify(response)

    if (user) {
      router.push("/")
    } else {
      alert("Login failed. Please check your credentials.")
      router.push("/login")
    }
  }

  return (
    <div>
      <form className="space-y-3" onSubmit={onSubmit}>
        <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
          <h1 className="mb-3 text-2xl">Please log in to continue.</h1>
          <div className="w-full">
            <div>
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email address"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            <div className="mt-4">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="password"
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>
          <button
            className="mt-4 h-10 px-4 rounded-lg bg-cyan-500 text-white"
            // onClick={() => {
            //   handleLogin(email, password)
            // }}
          >
            Log in
          </button>
          <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            {/* {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )} */}
          </div>
        </div>
      </form>
    </div>
  )
}
