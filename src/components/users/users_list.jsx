import UserCard from "./user_card"

export default function UsersList({ users }) {
  return (
    <main className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
      {users.map((user) => (
        <UserCard
          key={user.id}
          id={user.id}
          avatar={user.avatar}
          name={user.name}
          city={user.city}
          state={user.state}
        />
      ))}
    </main>
  )
}
