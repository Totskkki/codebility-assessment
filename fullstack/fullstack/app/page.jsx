import Link from "next/link";
import { posts } from "../data/posts";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-violet-900">
        My Blog
      </h1>

      <div className="grid gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <Link
              href={`/posts/${post.id}`}
              className="text-violet-900 font-bold hover:underline"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
