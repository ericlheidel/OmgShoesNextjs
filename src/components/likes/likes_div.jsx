import { HandThumbDownIcon, HandThumbUpIcon } from "@heroicons/react/24/outline"
import { _apiBaseUrl, _likeUrl } from "utility"

export default function LikesDiv({ userShoe }) {
  //++   /$$       /$$$$$$ /$$   /$$ /$$$$$$$$  /$$$$$$
  //++  | $$      |_  $$_/| $$  /$$/| $$_____/ /$$__  $$
  //++  | $$        | $$  | $$ /$$/ | $$      | $$  \__/
  //++  | $$        | $$  | $$$$$/  | $$$$$   |  $$$$$$
  //++  | $$        | $$  | $$  $$  | $$__/    \____  $$
  //++  | $$        | $$  | $$\  $$ | $$       /$$  \ $$
  //++  | $$$$$$$$ /$$$$$$| $$ \  $$| $$$$$$$$|  $$$$$$/
  //++  |________/|______/|__/  \__/|________/ \______/

  //++   /$$$$$$  /$$$$$$   /$$$$$$  /$$   /$$ /$$$$$$$$
  //++  |_  $$_/ /$$__  $$ /$$__  $$| $$  | $$| $$_____/
  //++    | $$  | $$  \__/| $$  \__/| $$  | $$| $$
  //++    | $$  |  $$$$$$ |  $$$$$$ | $$  | $$| $$$$$
  //++    | $$   \____  $$ \____  $$| $$  | $$| $$__/
  //++    | $$   /$$  \ $$ /$$  \ $$| $$  | $$| $$
  //++   /$$$$$$|  $$$$$$/|  $$$$$$/|  $$$$$$/| $$$$$$$$
  //++  |______/ \______/  \______/  \______/ |________/

  //++ "isLikedByCurrentUser key on userShoe object has a value of "false" on EVERY userShoe

  return (
    <>
      <div className="p-4 bg-blue-950 rounded-xl">
        {userShoe?.isLikedByCurrentUser ? (
          <button className="text-amber-600">
            <HandThumbDownIcon />
            Dislike
          </button>
        ) : (
          <button className="text-amber-600">
            <HandThumbUpIcon />
            Like
          </button>
        )}
      </div>
    </>
  )
}
