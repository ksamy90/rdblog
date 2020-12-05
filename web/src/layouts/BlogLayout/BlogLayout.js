import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return (
    <div>
    <div>
        <h1><Link to={routes.home()}>Redwood Blog</Link></h1>
        <nav>
          <ul>
            <li><Link to={routes.about()}>About</Link></li>
          </ul>
        </nav>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default BlogLayout
