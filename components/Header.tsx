import styles from "../styles/static.module.css"
import Link from "next/link"


const Header = () => {
  return (
   
   <header className={styles.container}>
    <Link href="/">Home</Link>
    <Link href="/blog">Blog</Link>
    <Link href="/about">About</Link>
   </header>
   
  )
}

export default Header