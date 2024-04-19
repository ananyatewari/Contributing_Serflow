import React from 'react'
import { Link } from 'react-router-dom'
import './SideNav.css'
import { useState } from 'react'
function SideNav() {

  const [active, setActive] = useState(false)

  function toggleNav() {
    setActive(!active)
  }

  return (
    <div className={`sidebar ${active ? "active" : null} transition-all ease-in-out`}>
          <div className='top'>
              <div className='logo'>
                <img className='navlogo' src="icon-red.svg" alt="" />
                <span>Serflow</span>
              </div>
              <i className='bx bx-menu ham-button' id='btn' onClick={()=>{toggleNav()}}></i>
          </div>

          <div className='user'>
              <img src="profile-picture.jpg" className='user-img' alt="" />
              <div>
                <p className='bold'>Client B.</p>
                <p>Admin</p>
              </div>
          </div>
          <div className='ul-div'>
          <ul>
            <li>
              <Link to='/dashboard' className='a'>
                <i className='bx bx-grid-alt'></i>
                <span className='nav-item'>Dashboard</span>
              </Link>
              <span className='tooltip'>Dashboard</span>
            </li>
            <li>
              <Link to='/dashboard' className='a'>
              <i className='bx bx-bookmark-alt'></i>
                <span className='nav-item'>Tasks</span>
              </Link>
              <span className='tooltip'>Tasks</span>
            </li>
            <li>
              <Link to='/dashboard' className='a'>
                <i className='bx bx-bell'></i>
                <span className='nav-item'>Notifications</span>
              </Link>
              <span className='tooltip'>Notifications</span>
            </li>
            <li>
              <Link to='/dashboard' className='a'>
                <i className='bx bx-chat'></i>
                <span className='nav-item'>Messages</span>
              </Link>
              <span className='tooltip'>Messages</span>
            </li>
          </ul>
          <ul className='logout-ul'>
          <li>
              <Link to='/dashboard' className='a'>
                <i className='bx bx-log-out'></i>
                <span className='nav-item'>Logout</span>
              </Link>
              <span className='tooltip'>Logout</span>
            </li>
          </ul>
          </div>
    </div>
  )
}

export default SideNav