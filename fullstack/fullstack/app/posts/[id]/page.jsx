import Link from 'next/link';
import { posts } from '../../../data/posts';

export default function Post({ params }) {
  const post = posts.find(p => p.id === Number(params.id));

  if (!post) return <div>Post not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Link href="/" className="inline-block mb-4 px-4 py-2 bg-red-500 text-white rounded-lg transition">
        ← Back to Home
      </Link>
      <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700 leading-relaxed">{post.content}</p>
      </div>
    </div>
  );
}
