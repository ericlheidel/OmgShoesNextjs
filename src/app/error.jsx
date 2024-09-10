"use client"

import { useRouter } from "next/navigation"
import React from "react"

export default function Error({ error }) {
  const router = useRouter()

  React.useEffect(() => {
    // Log error or redirect as needed
    console.error(error)
  }, [error])

  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>{error.message || "An unexpected error occurred"}</p>
      <button onClick={() => router.refresh()}>Refresh</button>
    </div>
  )
}
