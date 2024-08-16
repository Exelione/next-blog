import styles from "@/styles/static.module.css"
import GoogleLoginButton from "@/components/GoogleLoginButton";
import {SignInForm} from "@/components/SignInForm";


export default async function Signin() {
  return ( 
  <div className={styles.blog}>
    <h1>Sign In</h1>
    <GoogleLoginButton />
    <h3>or</h3>
    <SignInForm  />
    
  </div>
  )
}