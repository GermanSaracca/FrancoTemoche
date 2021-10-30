import Link from 'next/link'

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Link href="/">Home</Link>
      </h1>
      <nav>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
