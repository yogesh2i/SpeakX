import React from 'react';
import Style from './Navbar.module.scss';
export default function Navbar() {
  return (
    <>
      <nav>
        <div className={Style.left}>
          <h3>QuestSearc</h3>
        </div>
        <div className={Style.right}>
          <div className={Style.menu}>Menu</div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Login</li>
          </ul>
        </div>
      </nav>
    </>
  )
}
