export const _apiBaseUrl = process.env.NEXT_PUBLIC_API_URL
export const _authUrl = "/api/auth"
export const _commentUrl = "/api/comment"
export const _conditionUrl = "/api/condition"
export const _friendshipUrl = "/api/friendship"
export const _likeUrl = "/api/like"
export const _shoeUrl = "/api/shoe"
export const _userprofileUrl = "/api/userprofile"
export const _usershoeUrl = "/api/usershoe"

export const sizes = [
  { id: 1, size: 5.5 },
  { id: 2, size: 6 },
  { id: 3, size: 6.5 },
  { id: 4, size: 7 },
  { id: 5, size: 7.5 },
  { id: 6, size: 8 },
  { id: 7, size: 8.5 },
  { id: 8, size: 9 },
  { id: 9, size: 9.5 },
  { id: 10, size: 10 },
  { id: 11, size: 10.5 },
  { id: 12, size: 11 },
  { id: 13, size: 11.5 },
  { id: 14, size: 12 },
  { id: 15, size: 12.5 },
  { id: 16, size: 13 },
  { id: 17, size: 14 },
]

export const formatDateBasic = (timeStamp) => {
  const date = new Date(timeStamp)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  const hours = date.getHours()
  const minutes = String(date.getMinutes()).padStart(2, "0")
  const ampm = hours >= 12 ? "PM" : "AM"
  const formattedHours = hours % 12 || 12
  return `${year}-${month}-${day} ${formattedHours}:${minutes} ${ampm}`
}

export const formatDateDetailed = (timeStamp) => {
  const date = new Date(timeStamp)

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const year = date.getFullYear()
  const month = monthNames[date.getMonth()]

  const getDayWithSuffix = (day) => {
    if (day > 3 && day < 21) return day + "th"
    switch (day % 10) {
      case 1:
        return day + "st"
      case 2:
        return day + "nd"
      case 3:
        return day + "rd"
      default:
        return day + "th"
    }
  }

  const day = getDayWithSuffix(date.getDate())

  const hours = date.getHours()
  const minutes = String(date.getMinutes()).padStart(2, "0")
  const ampm = hours >= 12 ? "PM" : "AM"
  const formattedHours = hours % 12 || 12

  return `${month} ${day}, ${year} at ${formattedHours}:${minutes} ${ampm}`
}

export const ThumbsUp = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
    />
  </svg>
)

export const ThumbsDown = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
    />
  </svg>
)
