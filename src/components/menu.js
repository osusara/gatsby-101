import React from 'react'
import { Link } from 'gatsby'

const Menu = () => (
  <div style={{ background: "#f4f4f4"}}>
    <div style={{ margin: "0 auto", maxWidth: 960 }}>
      <ul style={{ listStyle: "none", display: "flex"}}>
        <li style={{ margin: "10px 10px 10px 0" }}><Link to="/">Home</Link></li>
        <li style={{ margin: "10px" }}><Link to="/about">About Us</Link></li>
        <li style={{ margin: "10px" }}><Link to="/services">Our Services</Link></li>
        <li style={{ margin: "10px" }}><Link to="/blog">Blog</Link></li>
      </ul>
    </div>
  </div>
);

export default Menu;
