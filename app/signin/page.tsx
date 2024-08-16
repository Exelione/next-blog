import styles from "@/styles/static.module.css"
import GoogleLoginButton from "@/components/GoogleLoginButton";
import {SignInForm} from "@/components/SignInForm";
import { Suspense } from "react";

export default async function Signin() {
  return ( 
  <div className={styles.blog}>
    <h1>Sign In</h1>
    <GoogleLoginButton />
    <h3>or</h3>
    <Suspense fallback={<div>Loading...</div>}>
    <SignInForm  />
    </Suspense>
  </div>
  )
}