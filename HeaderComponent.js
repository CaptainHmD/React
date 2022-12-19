

function HeaderComponent() {
    return (
      <header >
        <nav className="header-navbar">
          <img
            className="nav-img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            alt="known"
          ></img>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        </nav>
  
      </header>
    );
  }
  export default HeaderComponent;