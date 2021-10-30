import Head from 'next/head'
//Contentful package
import { createClient } from 'contentful'
//Components
import BlogCard from '../components/BlogCard'

const Home = ({ blogs }) => {
  return (
    <div>
      <h1>Lista de blogs</h1>
      <hr />
      <br />
      <ul className="blogs-cards-container">
        {blogs.map((blog) => (
          <BlogCard key={blog.sys.id} blog={blog} />
        ))}
      </ul>

      <style jsx>{`
        .blogs-cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          grid-gap: 1rem;
          padding: 1rem;
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps() {
  //Contentful client
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })
  const blogs = await client.getEntries({
    content_type: 'blog',
  })

  return {
    props: {
      blogs: blogs.items,
    },
  }
}

export default Home
