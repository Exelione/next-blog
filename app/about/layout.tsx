import Link from "next/link";
import styles from "@/styles/static.module.css"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About page | Next App",
    description: "it's a test about page dude dont laugh",
    
    
  };
export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
     <div className={styles.blog}>
        <h1>About us</h1>
        
        <ul>
            <li><Link href="/about/contacts">Contacts</Link></li>
            
            <li><Link href="/about/team">Team</Link></li>
        </ul>
        {children}
     </div>
    )
  }