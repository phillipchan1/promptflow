import React, { useEffect, useState } from "react"
import { auth } from "./firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import {
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth"
import { onAuthStateChanged } from "firebase/auth"
import WorkflowHome from "./Workflows/WorkflowHome"

const Auth = () => {
  const [user, loading, error] = useAuthState(auth)

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
  }

  const signOut = () => {
    auth.signOut()
  }

  return (
    <div>
      {user ? (
        <div>
          {user.displayName}

          <button onClick={signOut}>Sign out</button>
          <WorkflowHome />
        </div>
      ) : (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}
    </div>
  )
}

export default Auth
