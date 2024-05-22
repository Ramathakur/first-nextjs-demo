import Link from "next/link"

const blog = () => {
  return (
    <main>
        <h1>Blog post</h1>
        <Link href="blog/post-1">Blog post 1</Link>
        <Link href="blog/post-2">Blog post 2</Link>
    </main>
  )
}

export default blog