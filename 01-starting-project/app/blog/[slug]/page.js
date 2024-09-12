export default function BlogPostPage({ params }) {
  return (
    <main>
    <h1>This is a Post</h1>
    <p>This is a paragraph of text.</p>
    <p>{params.slug}</p>
    </main>
  )
}