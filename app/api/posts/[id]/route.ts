import { cookies, headers } from "next/headers"
import { redirect } from "next/navigation"
import { NextResponse } from "next/server"

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const id = params.id
    // const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    //     method: "DELETE",
    // })
    const headerList = headers()
    const type = headerList.get("Content-Type")
    const cookiesList = cookies()
    const coo2 = cookiesList.get("Cookie_2")?.value
    // redirect("/blog")
    return NextResponse.json({id, type, coo2})
}