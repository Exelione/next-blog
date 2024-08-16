import { NextResponse } from "next/server";
import { posts } from "./posts";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q")
    let currentPosts = posts
    if(query) {
        currentPosts = posts.filter((post) => post.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
    }
    console.log(query)


    return NextResponse.json(currentPosts)
}

export async function POST(request: Request) {
    const body = await request.json()
    console.log(body)
    return NextResponse.json({body})
}