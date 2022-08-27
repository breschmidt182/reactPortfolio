import 'bulma/css/bulma.min.css';
const Navigation = (props) => {
 return (
	<nav className="navbar is-light has-shadow is-spaced" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="/">
      <img src="https://www.freepnglogos.com/uploads/circle-png/grunge-frame-circle-png-clipart-29.png" alt="sketched out circle"></img>
     Breanna Schmidt's Portfolio
		</a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu has-dropdown is-active">
    <div className="navbar-end">
      <a className="navbar-item" href="/about">
        About Me
      </a>

      <a className="navbar-item" href='/portfolio'>
        Portfolio
      </a>

			<a className="navbar-item" href='/contact'>
        Contact
      </a>

			<a className="navbar-item" href='/resume'>
        Resume
      </a>
    </div>
  </div>
</nav>
 )
}

export default Navigation
