'use client';
import { useRouter } from "next/navigation";
import styles from "@/styles/static.module.css"
import { signIn } from "next-auth/react"
import type { FormEventHandler } from "react"




const SignInForm = () => {
    const router = useRouter()
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const res = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false,
        })
        if (res && !res.error) {
            router.push("/profile")
        } else {
            console.log(res)
        }
    }
    return (
            <form className={styles.SIForm} onSubmit={handleSubmit}>
                <input type="email" name='email' placeholder="email" required />
                <input type="password" name='password' placeholder="password" required autoComplete="none"/>
                <button type="submit">Sign In</button>
            </form>
    )
}

export  {SignInForm}