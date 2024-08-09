'use client'
import { useEffect } from "react";
import { Post } from "@/app/blog/page"
import Link from "next/link"
import "@/app/index.css"
import { usePosts } from "@/store";
import { shallow } from "zustand/shallow";



const Posts = () => {
    const [posts, loading, error, getAllPosts] = usePosts((state) => [
        state.posts,
        state.loading,
        state.error,
        state.getAllPosts,
      ], shallow);
      if(error) return <h1>Error: {error}</h1>
      useEffect(() => {
        getAllPosts()
      }, [getAllPosts])

  return (loading ? <h1>Loading...</h1> : (
    <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
    </ul>
  ))
};

export default Posts