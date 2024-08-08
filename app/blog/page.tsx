import { Metadata } from "next";
import styles from "@/styles/static.module.css"
import Link from "next/link";

export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string,
}

async function getData(){
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  })
  if(!response.ok) throw new Error("Unable to fetch posts")
  return response.json()
}

export const metadata: Metadata = {
    title: "Blog page | Next App",
    description: "it's a test about page dude dont laugh",
    
    
  };
  
const Blog = async () => {
  const posts = await getData()
  return (
    <div className={styles.blog}>
    <h3>Blog page</h3>
    <ul>
      {posts.map((post: Post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
    </div>
    
  )
}

export default Blog 