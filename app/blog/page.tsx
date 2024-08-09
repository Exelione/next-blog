
import styles from "@/styles/static.module.css"
import Posts from "@/components/Posts";
import { Metadata } from "next";
import PostSearch from "@/components/PostSearch";


export const metadata: Metadata = {
  title: 'Blog | Next App',
};
export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
}


const Blog = () => {
  
  return (
      
    <div className={styles.blog}>
      
      <h3>Blog page</h3>
      <PostSearch />
      <Posts />

    </div>

  )
}

export default Blog
