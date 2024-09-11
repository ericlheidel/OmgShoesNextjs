import Image from "next/image"
import Link from "next/link"

export default function ShoeCard({ name, image, id }) {
  return (
    <div>
      {/* mobile */}
      <div className="md:hidden block rounded-xl bg-blue-950 p-2 shadow-sm">
        <Link href={`/shoes/${id}`}>
          <Image
            src={`https://omgshoes.eheidel.com${image}`}
            alt={`picture of ${name} shoe`}
            className="rounded-xl"
            width={500}
            height={500}
            loading="eager"
          />
        </Link>
        <div className="pt-2 text-xs text-amber-600">{name}</div>
      </div>
      {/* non-mobile */}
      <div className="md:block hidden rounded-xl bg-blue-950 p-2 shadow-sm">
        <Link href={`/shoes/${id}`}>
          <Image
            src={`https://omgshoes.eheidel.com${image}`}
            alt={`picture of ${name} shoe`}
            className="rounded-xl"
            width={500}
            height={500}
            loading="eager"
          />
        </Link>
        <div className="pt-2 text-2xl text-amber-600">{name}</div>
      </div>
    </div>
  )
}
