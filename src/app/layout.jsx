import localFont from "next/font/local"
import "./globals.css"
import SideNav from "../components/nav/sidenav.jsx"
// import { cookies } from "next/headers"
import { _apiBaseUrl, _authUrl } from "../../utility"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata = {
  title: "OMG, Shoes...",
  description: "Nike SB Dunk Sneaker Community",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* {console.log(response)} */}
      {/* {console.log(response.status)} */}
      {/* {console.log(`${cookies().toString()}`)} */}
      {/* {response.status !== 200 ? (
        <>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=no"
          />
          <body
            className={`${geistSans.variable} ${geistMono.variable} bg-cyan-700 md:flex`}
          >
            <div className="w-full flex-none md:w-64">
              <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
              {children}
            </div>
          </body>
        </>
      ) : ( */}
      <>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <body
          className={`${geistSans.variable} ${geistMono.variable} bg-cyan-700 md:flex`}
        >
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
            {children}
          </div>
        </body>
      </>
      {/* )} */}
    </html>
  )
}

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} bg-cyan-700`}
//       >
//         <div className="w-full flex-none md:w-64">
//           <SideNav />
//         </div>
//         <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
//           {children}
//         </div>
//       </body>
//     </html>
//   )
// }
