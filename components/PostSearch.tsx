'use client'

import { getPostsBySearch } from "@/services/getPosts"
import styles from "@/styles/static.module.css"
import { FormEventHandler, useState } from "react"

interface Props {
    onSearch: (value: any[]) => void
}

const PostSearch = ({onSearch}: Props) => {
    const [search, setSearch] = useState('')
    const handleSubmit : FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        const posts = await getPostsBySearch(search)
        onSearch(posts)
    }
    
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <input type="search" placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button type="submit">Search</button>
    </form>
  )
}

export default PostSearch