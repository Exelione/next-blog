'use client'
import styles from "@/styles/static.module.css"
import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"

const GoogleLoginButton = () => {
    const searthParams = useSearchParams();
    const callbackUrl = searthParams.get('callbackUrl') || '/profile'
  return (
   <button className={styles.google} onClick={()=>signIn('google', {callbackUrl})}>Sign in with Google</button>
  )
}

export default GoogleLoginButton