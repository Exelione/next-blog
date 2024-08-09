'use client'


import styles from "@/styles/static.module.css"
import { useEffect, useState } from "react";
import { getAllPosts } from "@/services/getPosts";
import Posts from "@/components/Posts";
// import { Metadata } from "next";
import PostSearch from "@/components/PostSearch";

// export const metadata: Metadata = {
//   title: 'Blog | Next App',
// };
export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
}


const Blog = () => {
  
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllPosts()
    .then(setPosts)
    .finally(() => setLoading(false));
  }, [])
  return (
      
    <div className={styles.blog}>
      
      <h3>Blog page</h3>
      <PostSearch onSearch={setPosts} />
      {loading ? <h3>Loading...</h3> : <Posts posts={posts} />}

    </div>

  )
}

export default Blog
