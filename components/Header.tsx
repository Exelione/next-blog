import styles from "../styles/static.module.css"
import Navigation from "./Navigation"

const navItems = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "Blog",
        href: "/blog"
    },
    {
        label: "About",
        href: "/about"
    },
]

const Header = () => {
  return (
   
   <header className={styles.container}>
    <Navigation navLinks={navItems} />
   </header>
   
  )
}

export default Header