import client from '../../configs/contenfulClient'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import LoadingPage from '../../components/LoadingPage'

const BlogDetail = ({ blog }) => {
  //
  if (!blog) {
    return <LoadingPage />
  }

  const { featuredImage, title, textContent, author } = blog.fields
  const authorName = author?.fields.name

  return (
    <div className="blog">
      <div className="blog__banner">
        {/* <h1 className="title">{title}</h1> */}
      </div>
      <section className="blog__content">
        {author && <span className="author-tag">Por {authorName}</span>}

        <h1 className="blog__content__title">{title}</h1>
        <div className="blog__content__text">
          {documentToReactComponents(textContent)}
        </div>
      </section>

      <style jsx>{`
        .blog {
          padding: 0 0 5rem;
        }
        .blog__banner {
          display: grid;
          place-items: center;
          background-image: url(${featuredImage.fields.file.url});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          width: 100%;
          height: 50vw;
          max-height: 100%;
          /* position: absolute; */
        }
        /* .blog__banner .title {
          max-width: 60%;
          font-size: 4.5rem;
          font-weight: 300;
          color: #fff;
          text-align: center;
          margin: 0 auto;
          filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5));
        } */
        .blog__content {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 86vw;
          max-width: 1366px;
          padding: 4rem 2rem;
          margin: -20vw auto 1.25rem;
          outline: solid 4px #000;
          background-color: #fff;
          position: relative;
          transform-style: preserve-3d;
        }
        .blog__content .author-tag {
          position: absolute;
          top: -1.25rem;
          left: -1.25rem;
          font-size: 0.8rem;
          font-weight: 300;
          color: #000;
          text-transform: uppercase;
          letter-spacing: 0.1rem;
          background-color: #fff;
          border: solid 4px #000;
          padding: 0.75rem 1rem;
        }
        .blog__content:after {
          content: '';
          display: block;
          width: 100%;
          height: 100%;
          outline: solid 4px #000;
          position: absolute;
          top: 1.25rem;
          left: 1.25rem;
          transform: translateZ(-1px);
          background-color: #fff;
        }
        .blog__content__title {
          font-size: 3.5rem;
          align-self: flex-start;
          text-decoration: underline;
          text-underline-offset: 0.25rem;
          pading-bottom: 1rem;
        }
        .blog__content__title:first-letter {
          color: tomato;
        }
        .blog__content__text {
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps({ params }) {
  // Filtramos el cliente por el id obtenido del slug de la url
  // Esta busqueda nos devuelve todos los posts el primero es el que coincide
  const { items } = await client.getEntries({
    content_type: 'blog',
    'fields.slug': params.blogid,
  })

  return {
    props: {
      blog: items[0],
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  // Get posts/blogs from Contentful
  const blogs = await client.getEntries({
    content_type: 'blog',
  })

  const paths = blogs.items.map((blog) => {
    return {
      params: {
        blogid: blog.fields.slug,
      },
    }
  })

  return {
    paths,
    fallback: true,
  }
}
export default BlogDetail
