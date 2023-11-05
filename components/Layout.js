import React from 'react';
const Layout = ({ children }) => (
  <div>
    <header>Todo App</header>
    <main>{children}</main>
    <footer>© 2023, created by ROhan!!</footer>
  </div>
);

export default Layout;
