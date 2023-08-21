function Footer() {
	return(
		<footer className="footer">
  		<div className="content has-text-centered">
    		<p>
      		<strong>Bre Schmidt</strong> 
					<a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new " target="_blank"> Feel free to contact me at <strong>breanna.schmidt12@gmail.com</strong></a>
   	 		</p>
		 		<p>Copyright &copy; <strong>Breanna Schmidt</strong> 2022</p>
		 		<a href="https://github.com/breschmidt182?tab=repositories" target="_blank"><img className="icons" src={require("../images/icons/github.png")} alt="Github logo"></img></a>
		 		<a href="https://www.linkedin.com/in/breanna-schmidt0711/" target="_blank"><img className="icons" src={require("../images/icons/linkedin.png")} alt="LinkedIn logo"></img></a>
		 		<a href="https://www.instagram.com/bre.schmidt182/" target="_blank"><img className="icons" src={require("../images/icons/instagram.png")} alt="Instagram logo"></img></a>
 	 		</div>
		</footer>
	)
}

export default Footer;