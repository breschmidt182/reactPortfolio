function Contact() {
	return (
		<form>
			<div className='field'>
				<label className='label'>Name</label>
				<div className='control'>
					<input className='input' type='text' placeholder='Enter name here'></input>
				</div>
			</div>
			<div className='field'>
				<label className='label'>Email</label>
				<div className='control has-icons-left has-icons-right'>
					<input className='input' type='email' placeholder='Enter email address here'></input>
					<span className='icon is-small is-left'>
						<i className='fas fa-envelope'></i>
					</span>
				</div>
			</div>

			<div className='field'>
				<label className='label'>Message</label>
				<div className='control'>
					<textarea className='textarea' placeholder='Type message here'></textarea>
				</div>
			</div>

			<div className='field is-grouped'>
				<div className='control'>
					<button className='button is-link'>Submit</button>
				</div>
				<div className='control'>
					<button className='button is-link is-danger'>Cancel</button>
				</div>
			</div>
		</form>
	)
}

export default Contact;