import { getAllPosts, getPostsBySearch } from "@/services/getPosts";
import { create } from "zustand";

interface UsePosts {
    posts: any[];
    loading: boolean;
    error: string;
    getAllPosts: () => Promise<void>;
    getPostsBySearch: (value: string) => Promise<void>;
    
}
export const usePosts = create<UsePosts>()((set)=>({
    posts: [],
    loading: false,
    error: '',
    getAllPosts: async () => {
        set({loading: true})
        const posts = await getAllPosts();
        set({posts: await posts, loading: false})
    },
    getPostsBySearch: async (search: string) => {
        set({loading: true})
        const posts = await getPostsBySearch(search);
        set({posts: await posts, loading: false})
    },
}))