import { Post } from "@/app/blog/page"
import Link from "next/link"
import "@/app/index.css"



const Posts = ({posts}: {posts: Post[]}) => {
  return (
    <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
  )
}

export default Posts