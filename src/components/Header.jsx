import React from 'react';

function Header(props) {
    return (
        <header className="app-header">
        <h1>Recipe App</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/favorites">Favorites</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </header>
    );
}

export default Header;