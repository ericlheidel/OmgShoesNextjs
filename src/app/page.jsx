"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Page() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/")
  }, [])

  return (
    <div>
      <div className="mt-4 flex grow flex-col gap-4">
        <div className="md:w-3/5 flex flex-col justify-center gap-6 rounded-lg bg-blue-950 px-6 py-10 md:px-20">
          <p className="text-xl text-amber-600 md:text-3xl md:leading-normal">
            <strong>Welcome to OMG, Shoes...</strong>
            <br></br>Your Community for Nike Dunks. Brought to you by{" "}
            <a href="https://github.com/ericlheidel" className="text-blue-500">
              Eric Heidel
            </a>
          </p>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <div className="hidden md:block p-12 bg-blue-950 md:rounded-3xl">
            <Image
              src="https://pbs.twimg.com/media/E25w2ORWQAMuBio?format=jpg&name=medium"
              alt="Screenshot of the dashboard project showing desktop version"
              width={1000}
              height={760}
              className="hidden md:block"
              loading="eager"
            />
          </div>
          <div className="block md:hidden p-6 bg-blue-950 rounded-lg w-[100%]">
            <Image
              src="https://pbs.twimg.com/media/E25w2ORWQAMuBio?format=jpg&name=medium"
              alt="Screenshot of the dashboard project showing mobile version"
              width={560}
              height={620}
              className="block md:hidden"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
