import 'bulma/css/bulma.min.css';
const Navigation = (props) => {
 return (
<nav className="navbar is-light has-shadow is-spaced" role="navigation" aria-label="main navigation">
  <div className="navbar-brand scale-in-hor-left">
    <a className="navbar-item title is-3" href="/">
      <img src="https://www.freepnglogos.com/uploads/circle-png/grunge-frame-circle-png-clipart-29.png" alt="sketched out circle"></img>
     Breanna Schmidt
		</a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu has-dropdown is-active title is-3">
    <div className="navbar-end">
      <a className="navbar-item slide-in-right" href="/about">
        About Me
      </a>

      <a className="navbar-item slide-in-right" href='/portfolio'>
        Portfolio
      </a>

			<a className="navbar-item slide-in-right" href='/contact'>
        Contact
      </a>

			<a className="navbar-item slide-in-right" href='/resume'>
        Resume
      </a>
    </div>
  </div>
</nav>
 )
}

export default Navigation
