import { Link, Outlet } from 'react-router-dom'
import './Styles.css'

function Nav() {
  return (
    <>
      <div id='nav'>
        <ol>
          <li><h3>GamingLounge</h3></li>
          <li><Link to="/home/">Home</Link></li>
          <li><Link to="/rules/">Regelwerk</Link></li>
          <li><Link to="/test/">Test Page</Link></li>
        </ol>
      </div>
      <div id='side'>
        <h3>Domain</h3>
        <p>GamingLounge.me</p>
        <h3>Links</h3>
        <a href='https://discord.gaminglounge.me/'>Discord</a><br />
        <a href='https://tiktok.gaminglounge.me/'>Tiktok</a><br />
        <a href='https://instagram.gaminglounge.me/'>Instagram</a><br />
        <br />
        <h3>Kontakt</h3>
        <p>E-Mail: info@gaminglounge.me</p><br />
        <br />
        <br />
        <br />
        <h3>Impressum</h3>
        <h3>Datenschutzerklährung</h3>
      </div>
      <div id='foot'>
        <p>Copyright © 2024 GamingLounge.me</p>
      </div>
      <div id='content'>
        <Outlet />
      </div>
    </>
)
}

export default Nav
