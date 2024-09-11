import ShoeCard from "./shoe_card"

export default function ShoesList({ shoes }) {
  return (
    <main className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      {shoes.map((shoe) => (
        <ShoeCard
          key={shoe.id}
          name={shoe.name}
          image={shoe.image}
          id={shoe.id}
        />
      ))}
    </main>
  )
}
