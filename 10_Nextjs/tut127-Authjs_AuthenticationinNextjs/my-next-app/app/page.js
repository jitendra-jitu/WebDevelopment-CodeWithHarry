"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()

  if (session) {
    const imageUrl = session.user.image || ""

    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        {imageUrl && <img src={imageUrl} alt="User profile image" />}
      </>
    )
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
