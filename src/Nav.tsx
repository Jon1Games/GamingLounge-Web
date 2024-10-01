import { Link, Outlet } from 'react-router-dom'
import React from 'react';
import CookieConsent from "react-cookie-consent";
import './Styles.css'

function Nav() {
  const [visiblePlugins, setVisiblePlugins] = React.useState(true);
  const [visiblePluginsStuff, setVisiblePluginsStuff] = React.useState(true);
  return (
    <>
      <CookieConsent
        location="top"
        buttonText="Akzeptieren"
        overlay
      >Um eine möglichst komfortable Nutzung der Webseite zu ermöglichen, verwenden wir, nach deiner Zustimmung sogenannte Cookies.<br />
        Dies sind kleine Textdateien, welche verschiedene Informationen über dich und deinen Aufenthalt auf unserer Webseite enthalten können.</CookieConsent>
      <div id='nav'> 
        <ol>
          <li><h3>GamingLounge</h3></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Regeln/">Regelwerk</Link></li>
          <li><button className='btn' onClick={() => setVisiblePlugins(!visiblePlugins)}>Plugins</button> 
            {visiblePlugins ? <img className='img-center' src='/src/assets/expand-arrow.png'/> : <img className='img-center' src='/src/assets/collapese-arrow.png'/>}</li>
          {visiblePlugins &&
          <ul>
            <li><button className='btn' onClick={() => setVisiblePluginsStuff(!visiblePluginsStuff)}>Stuff</button> 
              {visiblePlugins ? <img className='img-center' src='/src/assets/expand-arrow.png'/> : <img className='img-center' src='/src/assets/collapese-arrow.png'/>}</li>
            {visiblePluginsStuff &&
            <ul>
              <li>Test</li>
            </ul>
            }
            <li>Test</li>
          </ul>
          }
        </ol>
      </div>
      <div id='side'>
        <h3>Domain</h3>
        <p>GamingLounge.me</p>
        <h3>Links</h3>
        <a href='https://discord.gaminglounge.me/'>Discord</a><br />
        <a href='https://youtube.gaminglounge.me/'>Youtube</a><br />
        <a href='https://tiktok.gaminglounge.me/'>Tiktok</a><br />
        <br />
        <h3>Kontakt</h3>
        <p>E-Mail: info@gaminglounge.me</p>
        <h3><Link to="/Impressum/">Impressum</Link></h3>
        <h3><Link to="/Datenschutzerklährung/">Datenschutzerklährung</Link></h3>
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
