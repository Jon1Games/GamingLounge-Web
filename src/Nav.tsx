import { Link, Outlet } from 'react-router-dom'
import './Styles.css'

function Nav() {
  return (
    <>
      <div id='nav'>
        <ol>
          <li><h3>GamingLounge</h3></li>
          <li><Link to="/home/">Home</Link></li>
          <li><Link to="/test/">Test Page</Link></li>
        </ol>
      </div>
      <div id='content'>
        <Outlet />
      </div>
    </>
)
}

export default Nav
