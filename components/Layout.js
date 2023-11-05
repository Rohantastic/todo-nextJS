import React from 'react';
import "./Layout.css";



const Layout = ({ children }) => (
  <div>
    <header>Todo App</header>
    <main>{children}</main>
    <footer>© 2023</footer>
  </div>
);

export default Layout;
