import { SignIn } from '@clerk/remix'

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)]">
      <SignIn />
    </div>
  )
}