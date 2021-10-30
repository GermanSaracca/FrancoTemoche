import Link from 'next/link'
import Image from 'next/image'

const BlogCard = ({ blog }) => {
  console.log(blog)
  const { fields, sys, metadata } = blog
  const { title, slug, author, thumbnail } = fields

  const authorName = author.fields.name
  const authorEmail = author.fields.email
  const thumbnailUrl = thumbnail.fields.file.url
  const thumbnailWidth = thumbnail.fields.file.details.image.width
  const thumbnailHeight = thumbnail.fields.file.details.image.height
  const thumbnailAlt = thumbnail.fields.title

  return (
    <div className="blog-card">
      <div className="thumbnail">
        <Image
          src={`https:${thumbnailUrl}`}
          width={thumbnailWidth}
          height={thumbnailHeight}
          alt={thumbnailAlt}
          blurDataURL={`https:${thumbnailUrl}`}
          placeholder="blur"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p>{authorName}</p>
        <small>{authorEmail}</small>
      </div>
      <div className="actions">
        <Link href={`/blog/${slug}`}>Ir al articulo</Link>
      </div>

      <style jsx>{`
        .blog-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          border-radius: 0.5rem;
          background-color: #fafafa;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
          margin: 1rem;
        }
        .thumbnail {
          width: 100%;
          height: 200px;
          position: relative;
        }
        .actions {
          align-self: flex-end;
          color: #0070f3;
        }
        .actions:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  )
}

export default BlogCard
