import 'bulma/css/bulma.min.css';
const Navigation = (props) => {
 return (
	<nav className="navbar is-light has-shadow is-spaced" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="/">
      <img src="https://www.freepnglogos.com/uploads/circle-png/grunge-frame-circle-png-clipart-29.png"></img>
     Breanna Schmidt's Portfolio</a>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
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

    {/* <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div> */}
  </div>
</nav>
 )
}

export default Navigation
