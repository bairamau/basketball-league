import React from 'react'
import PropTypes from 'prop-types'
import {
  Link,
  Route,
} from 'react-router-dom'
import slug from 'slug'
import Loading from './Loading'


function CustomLink({ to, children }) {
  return (
    <Route path={to.pathname} children={({ match }) => (
      <li style={{ listStyleType: 'none', fontWeight: match ? 'bold' : 'normal' }}>
        <Link to={to}>{children}</Link>
      </li>
    )} />
  )
}

Sidebar.propTypes = {
  loading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
}

function Sidebar({ title, list, loading, location, match }) {
  return !loading
    ? <div>
      <h3 className='header'>{title}</h3>
      <ul className='sidebar-list'>
        {list.map((item) => (
          <CustomLink
            key={item}
            to={{
              pathname: `${match.url}/${slug(item)}`,
              search: location.search,
            }}
          >
            {item.toUpperCase()}
          </CustomLink>
        ))}
      </ul>
    </div>
    : <Loading/>
}

export default Sidebar
