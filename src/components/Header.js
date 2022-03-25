import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Header.css';


function Header() {
  return (
    <div>
      <header>
        <div className='header_logolinks'>  
        <div className="header_logo">
          <h3>Bookstore CMS</h3>
        </div>
        <div className="header_links">
          <Link to="/">Books</Link>
          <Link to="/Calculator">Categories</Link>
        </div>
        </div>
        <Link to="/Quote"><i class="fas fa-user"></i></Link>
      </header>
      <section className="header_main">
        <Outlet />
      </section>
    </div>
  );
}

export default Header;
