//Layout components
import Header from './Header'
import Footer from './Footer'
//Components
import GoBackButton from '../components/GoBackButton'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="page-content">
        <GoBackButton />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
