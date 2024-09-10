import LoginForm from "../../components/login/login_form"

export const metadata = {
  title: "Login",
}

export default function Login() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex max-w-[400px] flex-col space-y-2.5 p-4 mt-36 md:-mt-32 bg-gray-400 rounded-3xl">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-950 pl-3 py-1 md:h-36">
          <div className="w-32 text-amber-600 font-bold md:text-[44px] text-[24px] md:w-36">
            <p>OMG, Shoes...</p>
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  )
}
