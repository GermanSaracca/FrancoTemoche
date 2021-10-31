import Head from 'next/head'

import client from '../configs/contenfulClient'
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
  // Get posts/blogs from Contentful
  const blogs = await client.getEntries({
    content_type: 'blog',
  })

  return {
    props: {
      blogs: blogs.items,
    },
    revalidate: 10,
  }
}

export default Home
