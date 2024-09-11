import Image from "next/image"
import Link from "next/link"

export default function UserCard({ id, avatar, name, city, state }) {
  return (
    <div>
      {/* mobile */}
      <div className="mb-4 w-fit md:hidden block rounded-xl bg-blue-950 p-2 shadow-sm">
        <Link href={`/users/${id}`}>
          <Image
            src={`https://omgshoes.eheidel.com${avatar}`}
            alt={`picture of ${name}'s avatar`}
            className="rounded-xl"
            width={250}
            height={250}
            loading="eager"
          />
        </Link>
        <div className="pt-2 text-lg font-semibold text-amber-600">{name}</div>
        <div className="m-[4px] p-2 rounded-xl bg-cyan-700 text-blue-950">
          <div>
            {city}, {state}
          </div>
        </div>
      </div>
      {/* non-mobile */}
      <div className="md:block hidden rounded-xl bg-blue-950 p-4 shadow-sm">
        <Link href={`/users/${id}`}>
          <Image
            src={`https://omgshoes.eheidel.com${avatar}`}
            alt={`picture of ${name}'s avatar`}
            className="rounded-xl"
            width={500}
            height={500}
            loading="eager"
          />
        </Link>
        <div className="mt-2 p-2 text-2xl text-amber-600">{name}</div>
        <div className="mx-[2px] bg-cyan-700 rounded-xl">
          <div className="mb-2 p-2 text-xl text-blue-950">
            {city}, {state}
          </div>
        </div>
      </div>
    </div>
  )
}
