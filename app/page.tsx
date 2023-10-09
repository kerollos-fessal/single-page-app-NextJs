import Link from "next/link"

export default function Home() {
  return (
    <main>
      <div className="text-xl font-bold">
        Welcome to home page <br></br>
        <Link className="hover:text-yellow-500" href="/posts">Check the latest posts!</Link>
      </div>
    </main>
  )
}
