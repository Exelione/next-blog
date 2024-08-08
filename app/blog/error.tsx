'use client'

export default function ErrorWrapper({
    error}: {error: Error}) {
    return (
            <>
            <h1>Oops!!! 
                <p>{error.message}</p>
            </h1>           
            </>
    )
}