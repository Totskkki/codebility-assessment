import { posts } from '../../../data/posts';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get('id'));
  const post = posts.find(p => p.id === id);

  if (!post) {
    return new Response(JSON.stringify({ error: 'Post not found' }), { status: 404 });
  }

  return new Response(JSON.stringify(post), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
