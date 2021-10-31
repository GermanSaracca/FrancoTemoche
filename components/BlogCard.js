import Link from 'next/link'
import Image from 'next/image'

const BlogCard = ({ blog }) => {
  const { fields, sys, metadata } = blog
  const { title, slug, author, thumbnail } = fields

  const authorName = author?.fields.name
  const authorEmail = author?.fields.email
  const thumbnailUrl = thumbnail.fields.file.url
  //   const thumbnailWidth = thumbnail.fields.file.details.image.width
  //   const thumbnailHeight = thumbnail.fields.file.details.image.height
  const thumbnailAlt = thumbnail.fields.title

  return (
    <div className="blog-card">
      <div className="thumbnail">
        <Image
          src={`https:${thumbnailUrl}`}
          alt={thumbnailAlt}
          blurDataURL={`https:${thumbnailUrl}`}
          placeholder="blur"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="content">
        <h3>{title}</h3>
        {author && (
          <>
            <p>{authorName}</p>
            <small>{authorEmail}</small>
          </>
        )}
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
          outline: solid 4px #000;
          background-color: #fff;
          margin: 1rem;
          transform-style: preserve-3d;
        }
        .blog-card:hover.blog-card:after {
          top: 1rem;
          left: 1rem;
        }
        .blog-card:after {
          content: '';
          display: block;
          width: 100%;
          height: 100%;
          outline: solid 4px #000;
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          transform: translateZ(-1px);
          background-color: #fff;
          transition: all 150ms linear;
          will-change: top, left;
        }
        .thumbnail {
          width: 100%;
          height: 250px;
          position: relative;
        }
        .content {
          align-self: flex-start;
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
