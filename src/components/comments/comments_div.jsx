import Comment from "./comment"

export default function CommentsDiv({ userShoe, loggedInUser }) {
  return (
    <div>
      <p className="mb-2 text-2xl font-bold text-amber-600">Comments</p>
      {userShoe.comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            comment={comment}
            loggedInUser={loggedInUser}
          />
        )
      })}
    </div>
  )
}
