import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import $ from 'jquery'
// CSS
import '../assets/css/navbar.css'

export default function Navbar({ setUser }) {
  const [dropShow, setDropShow] = useState(false);
  const [sideNavShow, setSideNavShow] = useState(false);
  const [expandSidebar, setExpandSidebar] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  
  function logout(){
    setUser(false)
  }

  useEffect(() => {
    if(expandSidebar){
      $('.side_nav').addClass('expand');
      $('.page_body').addClass('expand');
    }
    else{
      $('.side_nav').removeClass('expand');
      $('.page_body').removeClass('expand');
    }
  }, [expandSidebar]);

  useEffect(() => {
    if(darkTheme){
      $('body').addClass('dark');
    }
    else{
      $('body').removeClass('dark');
    }
  }, [darkTheme]);

  return (
    <>
      <nav className='main_nav'>
        <div className='nav_container'>
          <div className='branding'>
            <span className='fas fa-bars' onClick={() => {setSideNavShow(!sideNavShow)}}></span>
            <img src={require('../assets/images/branding.png')} />
          </div>
          <div className='profile'>
            <div className='profile_link' onClick={() => {setDropShow(!dropShow)}}>
              <div className='image'>
                <img src={require('../assets/images/avatar.png')} />
              </div>
              <div className='name'>ADMIN <span style={dropShow? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}} className='fas fa-chevron-down'></span></div>
            </div>
            {
              dropShow ?
              <div className='dropdown'>
                {/* <Link to='/edit-profile'><span className='fas fa-pen'></span> Edit Profile</Link> */}
                <a onClick={logout}><span className='fas fa-sign-out-alt'></span> Logout</a>
              </div>
              :
              <></>
            }
          </div>
        </div>
      </nav>

      <nav className={sideNavShow? 'side_nav show' : 'side_nav'}>
        <div className='top_contents'>
          <ul className='links'>
            <li>
              <NavLink to='/' exact><i className="fa-solid fa-house"></i> <span>Home</span></NavLink>
              <NavLink to='/news' exact><i className="fa-solid fa-newspaper"></i> <span>News</span></NavLink>
              <NavLink to='/categories' exact><i className="fa-solid fa-layer-group"></i> <span>Categories</span></NavLink>
              <NavLink to='/site-infos' exact><i className="fa-solid fa-circle-info"></i> <span>Site Infos</span></NavLink>
            </li>
          </ul>
        </div>
        
        <div className='bottom_contents'>
          <ul className='links'>
            <li>
              <a className='active' onClick={() => {setDarkTheme(!darkTheme)}}><i className={darkTheme? 'fa-solid fa-moon' : 'fa-solid fa-sun'} /></a>
            </li>
          </ul>
          <ul className='links'>
            <li>
              <a className='active' onClick={() => {setExpandSidebar(!expandSidebar)}}><i className="fa-solid fa-arrow-right" style={{transform: expandSidebar? 'rotate(180deg)' : 'rotate(0deg)', transition: '.2s'}}></i></a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
